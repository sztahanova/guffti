import { Quote } from "../Quote.types";

export type QuotesContextContent = {
  goals: Quote[];
  growth: Quote[];
  perseverence: Quote[];
  selfEsteem: Quote[];
  success: Quote[];
  allQuotes: Quote[];
  getQuotesByAuthor: (author: string) => Quote[];
};
