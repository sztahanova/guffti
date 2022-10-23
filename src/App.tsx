import { Grommet } from "grommet";
import styled from "styled-components";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { MainContent } from "./components/main-content/MainContent";
import { gufftiTheme } from "./theme";

const FlexGrommet = styled(Grommet)`
  display: flex;
  flex-flow: column nowrap;
`;

function App() {
  return (
    <FlexGrommet full theme={gufftiTheme}>
      <Header />
      <MainContent />
      <Footer />
    </FlexGrommet>
  );
}

export default App;
