import { Box, Image, Text } from "grommet";
import { Achievement } from "grommet-icons";
import globalStyles from "../../utils/global.styles";

export const AboutMe = () => {
  return (
    <Box
      height={{ height: "medium", min: "medium", max: "medium" }}
      pad="medium"
      gap="medium"
      background="accent-2"
      direction="row"
      style={{
        borderRadius: globalStyles.borderRadius,
        display: "flex",
      }}
    >
      <Box
        style={{ aspectRatio: "1/1", borderRadius: 20 }}
        flex={{ grow: 1, shrink: 1 }}
        background="white"
      >
        <Image src="guffti2.png" fit="contain" height="100%" />
      </Box>
      <Box gap="large" overflow="auto" flex={{ grow: 1, shrink: 2 }}>
        <Text size="xxlarge" color="white">
          A nevem Gufftáv. Gufftáv Gufftávfon. Af elfő éf leghírefebb
          üfletffápa.
        </Text>
        <Text size="large" color="white">
          Már fiatalkoromban nagyon érdekelt a pénf éf a függetlenfég, efért nem
          volt kérdéfef, hogy af üfleti élet leff af én világom. Verejtékef
          munkával felépítettem egy igafi birodalmat az ófeánban. De fajnof
          teljefen, mondom TELJEFEN af önhibámon kívül a gonof adóffápák
          alaptalanul letartóftattak és fárolták af öffef fámlám! Én afonban
          hifek abban, hogy mindenki a maga ferenfféjének a kováfa, ezért
          felálltam, leporoltam af ufonyaim éf új vállalkofáfba kefdtem!
          Jelenleg motiváfióf trénerként fegítek embereknek éf állatoknak
          egyaránt, mert fentül hifem, hogy a bölfeffégeim mankók egy febb élet
          építéfére!
        </Text>
        <Box
          direction="row"
          margin={{ top: "auto" }}
          gap='small'
          style={{alignItems: 'center'}}
        >
          <Achievement color="white"/>
          <Text size="xxlarge" color="white">
            Ajánlj 5 iffmerőft éf kedvefményt kapff!
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
