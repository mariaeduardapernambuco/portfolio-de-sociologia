export interface DocumentaryPhoto {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  width?: number;
  height?: number;
}

export interface PortfolioEntry {
  id: string;
  order: string;
  title: string;
  kicker: string;
  lead?: string;
  paragraphs: string[];
  question?: string;
  images: DocumentaryPhoto[];
  activityIds: string[];
  related?: { label: string; href: string };
}
