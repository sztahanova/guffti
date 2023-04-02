import { createContext, PropsWithChildren, useCallback, useEffect, useState } from "react";
import goalsQuotes from "../../../assets/goals-quotes.json";
import growthQuotes from "../../../assets/growth-quotes.json";
import perseverenceQuotes from "../../../assets/perseverence-quotes.json";
import selfEsteemQuotes from "../../../assets/self-esteem-quotes.json";
import successQuotes from "../../../assets/success-quotes.json";
import { Quote } from "../Quote.types";
import { QuotesContextContent } from "./QuotesContext.types";

const defaultQuotesContextContent: QuotesContextContent = {
  goals: [],
  growth: [],
  perseverence: [],
  selfEsteem: [],
  success: [],
  allQuotes: [],
  getQuotesByAuthor: (_author: string) => [],
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

  useEffect(() => {
    const importedGoals: Quote[] = goalsQuotes.goals;
    const importedGrowth: Quote[] = growthQuotes.growth;
    const importedPerseverence: Quote[] = perseverenceQuotes.perseverance;
    const importedSelfEsteem: Quote[] = selfEsteemQuotes["self-esteem"];
    const importedSuccess: Quote[] = successQuotes.success;

    setGoals(importedGoals);
    setGrowth(importedGrowth);
    setPerseverence(importedPerseverence);
    setSelfEsteem(importedSelfEsteem);
    setSuccess(importedSuccess);

    setAllQuotes([
      ...importedGoals,
      ...importedGrowth,
      ...importedPerseverence,
      ...importedSelfEsteem,
      ...importedSuccess,
    ]);
  }, []);

  useEffect(() => {
    const newQuotesByAuthors: Map<string, Quote[]> = new Map();

    allQuotes.forEach((quote: Quote) => {
      newQuotesByAuthors.set(quote.author, [...(newQuotesByAuthors.get(quote.author) ?? []), quote]);
    });

    setQuotesByAuthors(newQuotesByAuthors);
  }, [allQuotes]);

  const getQuotesByAuthor = useCallback((author: string) => quotesByAuthors.get(author) ?? [], [quotesByAuthors]);

  return (
    <QuotesContext.Provider value={{ goals, growth, perseverence, selfEsteem, success, allQuotes, getQuotesByAuthor }}>
      {children}
    </QuotesContext.Provider>
  );
};
