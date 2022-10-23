import { Main } from "grommet";
import styled from "styled-components";
import { QuotesCarousel } from "../quotes/Quotes";

const StyledMainContent = styled(Main)`
  flex: 1;
  padding: 10px;
`;

export const MainContent = () => {
  return (
    <StyledMainContent>
      <QuotesCarousel />
    </StyledMainContent>
  );
};
