/**
 * Gera um preview HTML independente de Vite a partir do mesmo JSX/TSX original.
 * Não substitui o build de produção do projeto React. Necessita TypeScript global
 * apenas neste ambiente de exportação; não é necessário para visualizar o preview.
 */
const fs = require('fs');
const path = require('path');
const Module = require('module');
const ts = require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript');
const root = path.resolve(__dirname, '..');
const preview = path.join(root, 'preview');
const jsx = (type, props) => ({ type, props: props || {} });
const Fragment = ({ children }) => children;
const originalLoad = Module._load;
Module._load = function(request, parent, isMain) {
  if(request === 'react/jsx-runtime') return { jsx, jsxs: jsx, Fragment };
  if(request === 'react') return { useEffect: () => {}, useState: x => [x, () => {}] };
  return originalLoad.call(this, request, parent, isMain);
};
const diagnostics = [];
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (mod, filename) => {
    const src = fs.readFileSync(filename, 'utf8');
    const result = ts.transpileModule(src, { fileName: filename, reportDiagnostics: true,
      compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022, esModuleInterop: true } });
    for (const issue of result.diagnostics || []) {
      if (issue.category === ts.DiagnosticCategory.Error) diagnostics.push({filename, message: ts.flattenDiagnosticMessageText(issue.messageText, '\n')});
    }
    mod._compile(result.outputText, filename);
  };
}
const App = require(path.join(root, 'src/App.tsx')).default;
const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const escape = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const kebab = s => s.replace(/[A-Z]/g, c => '-' + c.toLowerCase());
function html(v) {
  if (v === null || v === undefined || v === false || v === true) return '';
  if (Array.isArray(v)) return v.map(html).join('');
  if (typeof v !== 'object') return escape(v);
  if (typeof v.type === 'function') return html(v.type(v.props));
  if (v.type === Fragment || v.type === Symbol.for('react.fragment')) return html(v.props.children);
  const {children, key, ...attrs} = v.props || {};
  const attributeString = Object.entries(attrs).filter(([k,val]) => k !== 'ref' && !k.startsWith('on') && val !== null && val !== undefined && val !== false)
    .map(([k,val]) => {
      if(k === 'className') k = 'class';
      if(k === 'htmlFor') k = 'for';
      if(k === 'style' && val && typeof val === 'object') val = Object.entries(val).map(([property,x]) => `${kebab(property)}:${x}`).join(';');
      if(typeof val === 'boolean') return ` ${k}`;
      return ` ${k}="${escape(val)}"`;
    }).join('');
  if (voidTags.has(v.type)) return `<${v.type}${attributeString}>`;
  return `<${v.type}${attributeString}>${html(children)}</${v.type}>`;
}
const markup = html(jsx(App, {}));
const document = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#FAF7EC"><meta name="description" content="Portfólio de Sociologia: um portfólio acadêmico autoral de Maria Eduarda Pernambuco Souza Leão"><title>Portfólio de Sociologia | Maria Eduarda Pernambuco</title><link rel="icon" href="./favicon.svg"><link rel="stylesheet" href="./assets/tokens.css"><link rel="stylesheet" href="./assets/global.css"><link rel="stylesheet" href="./assets/responsive.css"></head><body><div id="root">${markup}</div><script>(function(){const progress=document.querySelector('.reading-progress');const tabs=[...document.querySelectorAll('.folder-tab')];function update(){const d=document.documentElement;const max=d.scrollHeight-innerHeight;if(progress)progress.style.transform='scaleX('+(max>0?scrollY/max:0)+')';let active='';for(const tab of tabs){const section=document.querySelector(tab.getAttribute('href'));if(section&&section.getBoundingClientRect().top<innerHeight*.37)active=tab.getAttribute('href');}for(const tab of tabs){const yes=tab.getAttribute('href')===active;tab.classList.toggle('folder-tab--active',yes);if(yes)tab.setAttribute('aria-current','location');else tab.removeAttribute('aria-current');}}window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();})();</script></body></html>`;
fs.mkdirSync(path.join(preview, 'assets'), { recursive: true });
for (const name of ['tokens.css', 'global.css', 'responsive.css']) fs.copyFileSync(path.join(root,'src/styles',name), path.join(preview,'assets',name));
fs.copyFileSync(path.join(root,'public/favicon.svg'), path.join(preview,'favicon.svg'));
fs.writeFileSync(path.join(preview, 'index.html'), document);
console.log(`Preview: ${path.join(preview, 'index.html')} — ${markup.length} bytes de HTML, ${diagnostics.length} erros de sintaxe TSX.`);
if (diagnostics.length) { console.error(diagnostics); process.exitCode=1; }
