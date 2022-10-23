import { Box, Button, Header as GrommetHeader, Text } from "grommet";
import { Coffee, Send } from "grommet-icons";
import { Shark } from "../../utils/icons/Shark";

export const Header = () => {
  return (
    <GrommetHeader background="brand" pad="medium">
      <Shark />
      <Text size="3xl" weight="bold">
        Guffti Weboldala
      </Text>
      <Box justify="end" direction="row" gap="medium">
        <Button
          label="Bölfeffég"
          icon={<Coffee />}
          onClick={() =>
            alert(
              "Effer valamikor itt lehet random bölfefféget kérni, ha FFita nem leff ilyen luffta!"
            )
          }
        />
        <Button
          label="Hírlevél"
          icon={<Send />}
          onClick={() =>
            alert(
              "Effer valamikor itt lehet feliratkofni a bölfeffégekkel teli hírlevelemre, ha FFita nem leff ilyen luffta!"
            )
          }
        />
      </Box>
    </GrommetHeader>
  );
};
