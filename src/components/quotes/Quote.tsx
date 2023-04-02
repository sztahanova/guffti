import { Box, Text } from "grommet";
import globalStyles from "../../utils/global.styles";
import { QuoteProps } from "./Quote.types";

export const Quote = ({ quote, backgroundColor }: QuoteProps) => {
  return (
    <Box
      height="100%"
      style={{ borderRadius: globalStyles.borderRadius }}
      background={{ color: backgroundColor }}
    >
      <Text>{quote}</Text>
    </Box>
  );
};
