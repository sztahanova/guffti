import { Box, Carousel, Text } from "grommet";
import { FC } from "react";
import { QuoteCarouselItemProps } from "./Quotes.types";

const QuoteCarouselItem: FC<QuoteCarouselItemProps> = ({
  quote,
  backgroundColor,
  backgroundImage,
}: QuoteCarouselItemProps) => {
  return (
    <Box
      fill
      background={{
        color: backgroundColor,
        image: `url(${backgroundImage})`,
        size: "contain",
      }}
      pad="small"
    >
      <Text color="light-2" size="xlarge">
        {quote}
      </Text>
    </Box>
  );
};

export const QuotesCarousel = () => {
  // play={10000}
  return (
    <Carousel height="medium" style={{ aspectRatio: "3 / 2" }}>
      <QuoteCarouselItem
        quote="Senki sem tud olyan nagyot ütni, mint az élet."
        backgroundColor="pink"
        backgroundImage="shark_1_1031x687.jpg"
      />
      <QuoteCarouselItem
        quote="Nem az számít, mekkorát tudsz ütni, hanem hogy milyen keményen állod az ütéseket, miközben csak mész előre."
        backgroundColor="purple"
      />
      <QuoteCarouselItem
        quote="A világ nem csak napfény és szivárvány. Ez egy kegyetlen, undok hely."
        backgroundColor="teal"
      />
      <QuoteCarouselItem
        quote="Bírni kell a pofont, és muszáj menni tovább. Csak így lehet győzni!"
        backgroundColor="aquamarine"
      />
      <QuoteCarouselItem
        quote="Ha tudod, hogy mit érsz, menj, és küzdj meg azért, ami jár, és közben viseld el a pofonokat!"
        backgroundColor="gold"
      />
      <QuoteCarouselItem
        quote="Ideje feltenned magadnak a kérdést: Azért vagy itt, hogy másoknak bizonyíts, vagy azért, hogy magadnak?"
        backgroundColor="lightsalmon"
      />
      <QuoteCarouselItem
        quote="Ha valakinek nincs veszítenivalója, az veszélyes."
        backgroundColor="orangered"
      />
      <QuoteCarouselItem
        quote="Addig, amíg nem hiszel magadban, nem lesz saját életed."
        backgroundColor="firebrick"
      />
    </Carousel>
  );
};
