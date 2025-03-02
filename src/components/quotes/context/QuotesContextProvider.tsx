import { createContext, PropsWithChildren, useCallback, useEffect, useState } from "react";
import goalsQuotes from "../../../assets/goals-quotes.json";
import growthQuotes from "../../../assets/growth-quotes.json";
import perseverenceQuotes from "../../../assets/perseverence-quotes.json";
import selfEsteemQuotes from "../../../assets/self-esteem-quotes.json";
import successQuotes from "../../../assets/success-quotes.json";
import { Quote, QuoteCategory, RawQuote } from "../Quote.types";
import { QuotesContextContent } from "./QuotesContext.types";

const defaultQuotesContextContent: QuotesContextContent = {
  goals: [],
  growth: [],
  perseverence: [],
  selfEsteem: [],
  success: [],
  allQuotes: [],
  getQuotesByAuthor: (_author: string) => [],
  getQuotesByCategory: (_category: QuoteCategory) => [],
};

export const QuotesContext = createContext(defaultQuotesContextContent);

export const QuotesContextProvider = ({ children }: PropsWithChildren) => {
  const [goals, setGoals] = useState<Quote[]>(defaultQuotesContextContent.goals);
  const [growth, setGrowth] = useState<Quote[]>(defaultQuotesContextContent.growth);
  const [perseverence, setPerseverence] = useState<Quote[]>(defaultQuotesContextContent.perseverence);
  const [selfEsteem, setSelfEsteem] = useState<Quote[]>(defaultQuotesContextContent.selfEsteem);
  const [success, setSuccess] = useState<Quote[]>(defaultQuotesContextContent.success);
  const [allQuotes, setAllQuotes] = useState<Quote[]>(defaultQuotesContextContent.allQuotes);
  const [quotesByAuthors, setQuotesByAuthors] = useState<Map<string, Quote[]>>(new Map());
  const [quotesByCategories, setQuotesByCategories] = useState<Map<QuoteCategory, Quote[]>>(new Map());

  const addTypeToQuote = useCallback((quote: RawQuote, type: QuoteCategory): Quote => {
    return { ...quote, category: type };
  }, []);

  useEffect(() => {
    const importedGoals: Quote[] = (goalsQuotes.goals as RawQuote[]).map<Quote>((quote: RawQuote) =>
      addTypeToQuote(quote, QuoteCategory.Goals)
    );
    const importedGrowth: Quote[] = (growthQuotes.growth as RawQuote[]).map<Quote>((quote: RawQuote) =>
      addTypeToQuote(quote, QuoteCategory.Growth)
    );
    const importedPerseverence: Quote[] = (perseverenceQuotes.perseverance as RawQuote[]).map<Quote>((quote: RawQuote) =>
      addTypeToQuote(quote, QuoteCategory.Perseverence)
    );
    const importedSelfEsteem: Quote[] = (selfEsteemQuotes["self-esteem"] as RawQuote[]).map<Quote>((quote: RawQuote) =>
      addTypeToQuote(quote, QuoteCategory.SelfEsteem)
    );
    const importedSuccess: Quote[] = (successQuotes.success as RawQuote[]).map<Quote>((quote: RawQuote) =>
      addTypeToQuote(quote, QuoteCategory.Success)
    );

    setGoals(importedGoals);
    setGrowth(importedGrowth);
    setPerseverence(importedPerseverence);
    setSelfEsteem(importedSelfEsteem);
    setSuccess(importedSuccess);

    setAllQuotes([...importedGoals, ...importedGrowth, ...importedPerseverence, ...importedSelfEsteem, ...importedSuccess]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const newQuotesByAuthors: Map<string, Quote[]> = new Map();
    const newQuotesByCategories: Map<QuoteCategory, Quote[]> = new Map();

    allQuotes.forEach((quote: Quote) => {
      newQuotesByAuthors.set(quote.author, [...(newQuotesByAuthors.get(quote.author) ?? []), quote]);
      newQuotesByCategories.set(quote.category, [...(newQuotesByCategories.get(quote.category) ?? []), quote]);
    });

    setQuotesByAuthors(newQuotesByAuthors);
    setQuotesByCategories(newQuotesByCategories);
  }, [allQuotes]);

  const getQuotesByAuthor = useCallback((author: string) => quotesByAuthors.get(author) ?? [], [quotesByAuthors]);

  const getQuotesByCategory = useCallback((category: QuoteCategory) => quotesByCategories.get(category) ?? [], [quotesByCategories]);

  return (
    <QuotesContext.Provider value={{ goals, growth, perseverence, selfEsteem, success, allQuotes, getQuotesByAuthor, getQuotesByCategory }}>
      {children}
    </QuotesContext.Provider>
  );
};
