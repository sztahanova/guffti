export type Quote = {
  quote: string;
  author: string;
};

export type QuoteWithType = {
  quote: string;
  author: string;
  type: QuoteWithType;
};

export type QuoteProps = {
  quote: Quote;

  backgroundColor: string;
};
