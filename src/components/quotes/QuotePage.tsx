import { Box, Button, List, Notification } from "grommet";
import { useCallback, useContext, useEffect, useState } from "react";
import palette from "../../utils/palette.json";
import { randomIntFromInterval } from "../../utils/Utils";
import { QuotesContext } from "./context/QuotesContextProvider";
import { Quote as QuoteComponent } from "./Quote";
import { Quote, QuoteCategory } from "./Quote.types";

export const QuotePage = () => {
  const { allQuotes, getQuotesByAuthor, getQuotesByCategory } = useContext(QuotesContext);

  const [currentQuote, setCurrentQuote] = useState<Quote>();
  const [currentBackground, setCurrentBackground] = useState<string>(palette.rainbow[0]);
  const [quoteList, setQuoteList] = useState<Quote[]>([]);
  const [isOnlyOneByAuthorNotificationVisible, setOnlyOneByAuthorNotificationVisible] = useState<boolean>(false);

  const generateRandomQuoteAndBackground = useCallback(() => {
    const quoteIndex: number = randomIntFromInterval(0, allQuotes.length - 1);
    setCurrentQuote(allQuotes[quoteIndex]);

    const backgroundIndex: number = randomIntFromInterval(0, palette.rainbow.length - 1);
    setCurrentBackground(palette.rainbow[backgroundIndex]);
  }, [allQuotes]);

  useEffect(() => generateRandomQuoteAndBackground(), [generateRandomQuoteAndBackground]);

  const onAuthorClick = useCallback((author: string) => setQuoteList(getQuotesByAuthor(author)), [getQuotesByAuthor]);

  const onCategoryClick = useCallback((category: QuoteCategory) => setQuoteList(getQuotesByCategory(category)), [getQuotesByCategory]);

  const onQuoteClick = useCallback(({ quote, index }: { quote?: Quote; index?: number }) => {
    if (quote == null || index == null) return;

    setCurrentQuote(quote);
    setCurrentBackground(palette.rainbow[index % palette.rainbow.length]);
    setQuoteList([]);
  }, []);

  const getAnotherByAuthor = useCallback(() => {
    if (currentQuote == null) return null;

    const allByAuthor: Quote[] = getQuotesByAuthor(currentQuote.author);

    if (allByAuthor.length === 1) {
      setOnlyOneByAuthorNotificationVisible(true);
      return;
    }

    const quoteIndex: number = randomIntFromInterval(0, allByAuthor.length - 1);
    setCurrentQuote(allByAuthor[quoteIndex]);

    const backgroundIndex: number = randomIntFromInterval(0, palette.rainbow.length - 1);
    setCurrentBackground(palette.rainbow[backgroundIndex]);
  }, [currentQuote, getQuotesByAuthor]);

  const getAnotherInCategory = useCallback(() => {
    if (currentQuote == null) return null;

    const allInCategory: Quote[] = getQuotesByCategory(currentQuote.category);
    const quoteIndex: number = randomIntFromInterval(0, allInCategory.length - 1);
    setCurrentQuote(allInCategory[quoteIndex]);

    const backgroundIndex: number = randomIntFromInterval(0, palette.rainbow.length - 1);
    setCurrentBackground(palette.rainbow[backgroundIndex]);
  }, [currentQuote, getQuotesByCategory]);

  const closeOnlyOneByAuthorNotification = useCallback(() => setOnlyOneByAuthorNotificationVisible(false), []);

  return (
    <Box pad="medium" gap="medium" height="100%">
      {quoteList != null && quoteList.length > 0 ? (
        <List primaryKey="quote" secondaryKey="category" data={quoteList} background={palette.rainbow} onClickItem={onQuoteClick} />
      ) : currentQuote != null ? (
        <Box gap="medium" height="100%">
          <Box style={{ minHeight: "50%" }}>
            <QuoteComponent
              quote={currentQuote}
              backgroundColor={currentBackground}
              onAuthorClick={onAuthorClick}
              onCategoryClick={onCategoryClick}
            />
          </Box>
          <Box direction="row" gap="medium" justify="center" width="100%">
            <Button primary label="Újabb idézetet kérek!" onClick={generateRandomQuoteAndBackground} style={{ minHeight: 50 }} />
            <Button primary label="Újat ugyanettől a szerzőtől!" onClick={getAnotherByAuthor} />
            <Button primary label="Újat ugyanebből a kategóriából!" onClick={getAnotherInCategory} />
          </Box>
          {isOnlyOneByAuthorNotificationVisible ? (
            <Notification
              toast
              status="warning"
              title="Nem található másik idézet"
              message="Ettől a szerzőtől nem találtunk más idézetet."
              onClose={closeOnlyOneByAuthorNotification}
            />
          ) : null}
        </Box>
      ) : (
        <Button label="Kérek egy idézetet!" onClick={generateRandomQuoteAndBackground} />
      )}
    </Box>
  );
};
