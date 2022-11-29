import { Box, Carousel } from "grommet";
import { QuoteCarouselItem } from "./Quote";

export const QuotesCarousel = () => {
  return (
    <Box style={{ aspectRatio: "3/2" }}>
      <Carousel play={10000} height="100%">
        <QuoteCarouselItem
          quote="Senki sem tud olyan nagyot ütni, mint az élet."
          backgroundColor="pink"
          index={1}
          imagePosition="bottom"
          textPosition={{ left: "50%", right: 20 }}
        />
        <QuoteCarouselItem
          quote="Nem az számít, mekkorát tudsz ütni, hanem hogy milyen keményen állod az ütéseket, miközben csak mész előre."
          backgroundColor="purple"
          index={2}
          imagePosition="center"
          textPosition={{ textAlign: "end", right: 20, top: "65%" }}
        />
        <QuoteCarouselItem
          quote="A világ nem csak napfény és szivárvány. Ez egy kegyetlen, undok hely."
          backgroundColor="teal"
          index={4}
          imagePosition="top -70px center"
          textPosition={{ top: "55%", right: "30%" }}
          textColor="gold"
        />
        <QuoteCarouselItem
          quote="Bírni kell a pofont, és muszáj menni tovább. Csak így lehet győzni!"
          backgroundColor="aquamarine"
          index={15}
          textColor="#301901"
          textPosition={{ top: "20%", right: "40%" }}
        />
        <QuoteCarouselItem
          quote="Ha tudod, hogy mit érsz, menj, és küzdj meg azért, ami jár, és közben viseld el a pofonokat!"
          backgroundColor="gold"
          index={14}
          imagePosition="center"
          textColor="lightcyan"
          textPosition={{ top: "40%", left: "50%", right: 20 }}
        />
        <QuoteCarouselItem
          quote="Ideje feltenned magadnak a kérdést: Azért vagy itt, hogy másoknak bizonyíts, vagy azért, hogy magadnak?"
          backgroundColor="lightsalmon"
          index={7}
          textColor="lightcyan"
          textPosition={{ left: "35%", textAlign: "end", right: 20 }}
        />
        <QuoteCarouselItem
          quote="Ha valakinek nincs veszítenivalója, az veszélyes."
          backgroundColor="orangered"
          index={8}
          textColor="lightcoral"
          textPosition={{ bottom: "5%" }}
        />
        <QuoteCarouselItem
          quote="Addig, amíg nem hiszel magadban, nem lesz saját életed."
          backgroundColor="firebrick"
          index={9}
          textColor="orange"
        />
      </Carousel>
    </Box>
  );
};
