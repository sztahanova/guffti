import { Box, Button, Header as GrommetHeader, Text } from "grommet";
import { Coffee, Send } from "grommet-icons";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as SharkIcon } from "../../utils/icons/shark_256x256.svg";

const HeaderButton = styled(Button)`
  padding-left: 10px;
  padding-right: 10px;
`;

export const Header = () => {
  const navigate = useNavigate();

  const navigateToQuotePage = useCallback(() => navigate("/quote"), [navigate]);

  return (
    <GrommetHeader background="brand" pad="small">
      <SharkIcon height={48} width={48} />
      <Text size="3xl" weight="bold">
        Guffti Weboldala
      </Text>
      <Box justify="end" direction="row">
        <HeaderButton
          label="Bölfeffég"
          icon={<Coffee />}
          // onClick={() => alert("Effer valamikor itt lehet random bölfefféget kérni, ha FFita nem leff ilyen luffta!")}
          onClick={navigateToQuotePage}
        />
        <HeaderButton
          label="Hírlevél"
          icon={<Send />}
          onClick={() =>
            alert("Effer valamikor itt lehet feliratkofni a bölfeffégekkel teli hírlevelemre, ha FFita nem leff ilyen luffta!")
          }
        />
      </Box>
    </GrommetHeader>
  );
};
