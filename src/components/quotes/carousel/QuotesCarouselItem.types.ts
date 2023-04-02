import CSS from "csstype";

export type TextPosition = {
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  transform?: string;
  textAlign?: CSS.Property.TextAlign;
};

export type QuoteCarouselItemProps = {
  index: number;
  quote: string;
  imagePosition?: string;
  textPosition?: TextPosition;
  backgroundColor?: string;
  textColor?: string;
};
