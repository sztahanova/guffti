import { Box, Text } from "grommet";
import { useCallback } from "react";
import globalStyles from "../../utils/global.styles";
import { QuoteCategory, QuoteProps } from "./Quote.types";

export const Quote = ({ quote, backgroundColor, onAuthorClick, onCategoryClick }: QuoteProps) => {
  const _onAuthorClick = useCallback(() => {
    onAuthorClick?.(quote.author);
  }, [onAuthorClick, quote.author]);

  const _onCategoryClick = useCallback(() => {
    onCategoryClick?.(quote.category);
  }, [onCategoryClick, quote.category]);

  const categoryFormatter = useCallback((category: QuoteCategory): string => {
    switch (category) {
      case QuoteCategory.Goals:
        return "Célkitűzés, célok elérése";
      case QuoteCategory.Growth:
        return "Fejlődés";
      case QuoteCategory.Perseverence:
        return "Kitartás";
      case QuoteCategory.SelfEsteem:
        return "Önbizalom";
      case QuoteCategory.Success:
        return "Siker";
      default:
        return "";
    }
  }, []);

  return (
    <Box height="100%" pad="medium" gap="small" style={{ borderRadius: globalStyles.borderRadius }} background={{ color: backgroundColor }}>
      <Text size="xxlarge" alignSelf="center">
        {quote.quote}
      </Text>
      <Text size="large" alignSelf="end" onClick={_onAuthorClick} style={{ cursor: onAuthorClick != null ? "pointer" : undefined }}>
        - {quote.author}
      </Text>
      <Text size="medium" alignSelf="end" onClick={_onCategoryClick} style={{ cursor: onCategoryClick != null ? "pointer" : undefined }}>
        {categoryFormatter(quote.category)}
      </Text>
    </Box>
  );
};
