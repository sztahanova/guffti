import { Main } from "grommet";
import styled from "styled-components";
import { AboutMe } from "../about-me/AboutMe";
import { QuotesCarousel } from "../quotes/carousel/QuotesCarousel";
import { TeamBanner } from "../team/TeamBanner";

const StyledMainContent = styled(Main)`
  flex: 1;
  padding: 10px;
`;

export const MainContent = () => {
  return (
    <StyledMainContent gap="small">
      <QuotesCarousel />
      <AboutMe />
      <TeamBanner />
    </StyledMainContent>
  );
};
