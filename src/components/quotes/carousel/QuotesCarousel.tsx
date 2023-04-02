import { Box, Carousel } from "grommet";
import Rocky from "../../assets/rocky-quotes.json";
import { QuoteCarouselItem } from "./QuoteCarouselItem";

const heightPerWidth = 0.35;

export const QuotesCarousel = () => {
  return (
    <Box
      width="100%"
      height={{
        min: `${100 * heightPerWidth}vw`,
        height: `${100 * heightPerWidth}vw`,
        max: `${100 * heightPerWidth}vw`,
      }}
      overflow="hidden"
      style={{ borderRadius: 30 }}
    >
      <Carousel play={10000} fill>
        <QuoteCarouselItem
          quote={Rocky.rocky_1}
          index={1}
          imagePosition="bottom"
          textPosition={{ left: "50%", right: 20 }}
        />
        <QuoteCarouselItem
          quote={Rocky.rocky_2}
          index={2}
          imagePosition="center"
          textPosition={{ textAlign: "end", right: 20, top: "65%" }}
        />
        <QuoteCarouselItem
          quote={Rocky.rocky_3}
          index={4}
          imagePosition="top -70px center"
          textPosition={{ top: "55%", right: "30%" }}
          textColor="gold"
        />
        <QuoteCarouselItem
          quote={Rocky.rocky_4}
          index={15}
          textColor="#301901"
          textPosition={{ top: "20%", right: "40%" }}
        />
        <QuoteCarouselItem
          quote={Rocky.rocky_5}
          index={14}
          imagePosition="center"
          textColor="lightcyan"
          textPosition={{ top: "40%", left: "50%", right: 20 }}
        />
        <QuoteCarouselItem
          quote={Rocky.rocky_6}
          index={7}
          textColor="lightcyan"
          textPosition={{ left: "35%", textAlign: "end", right: 20 }}
        />
        <QuoteCarouselItem
          quote={Rocky.rocky_7}
          index={8}
          textColor="lightcoral"
          textPosition={{ bottom: "5%" }}
        />
        <QuoteCarouselItem quote={Rocky.rocky_8} index={9} textColor="orange" />
      </Carousel>
    </Box>
  );
};
