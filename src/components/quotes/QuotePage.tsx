import { useContext, useState } from "react";
import { QuotesContext } from "./context/QuotesContextProvider";
import { Quote as QuoteComponent } from "./Quote";
import { Quote } from "./Quote.types";

export const QuotePage = () => {
  const { allQuotes } = useContext(QuotesContext);

  const [currentQuote, setCurrentQuote] = useState<Quote>()

  return <QuoteComponent />;
};
