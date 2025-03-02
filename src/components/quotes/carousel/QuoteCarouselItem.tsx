import { Box, Text } from "grommet";
import { FC } from "react";
import { QuoteCarouselItemProps } from "./QuotesCarouselItem.types";

export const QuoteCarouselItem: FC<QuoteCarouselItemProps> = ({
  quote,
  backgroundColor,
  index,
  imagePosition,
  textPosition = {},
  textColor = "midnightblue",
}: QuoteCarouselItemProps) => {
  const { top, right, bottom, left, transform, textAlign = "center" } = textPosition;

  return (
    <Box
      fill
      background={{
        color: backgroundColor,
        image: index != null ? `url(${process.env.PUBLIC_URL}/3per2/shark_${index}_800x533.jpg)` : undefined,
        size: "cover",
        position: imagePosition,
      }}
      pad="small"
      style={{ position: "relative", textAlign }}
    >
      <Text
        color={textColor}
        size="4xl"
        weight="bold"
        style={{
          position: "absolute",
          alignSelf: "center",
          top,
          right,
          bottom,
          left,
          transform,
        }}
      >
        {quote}
      </Text>
    </Box>
  );
};
