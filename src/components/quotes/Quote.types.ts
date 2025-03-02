export type RawQuote = {
  quote: string;
  author: string;
};

export enum QuoteCategory {
  Goals = "goals",
  Growth = "growth",
  Perseverence = "perseverence",
  SelfEsteem = "self-esteem",
  Success = "success",
}

export type Quote = {
  quote: string;
  author: string;
  category: QuoteCategory;
};

export type QuoteProps = {
  quote: Quote;
  backgroundColor: string;
  onAuthorClick?: (author: string) => void;
  onCategoryClick?: (category: QuoteCategory) => void;
};
