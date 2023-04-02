import { Grommet } from "grommet";
import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import styled from "styled-components";
import { ErrorPage } from "./components/error-page/ErrorPage";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { MainContent } from "./components/main-content/MainContent";
import { QuotesContextProvider } from "./components/quotes/context/QuotesContextProvider";
import { gufftiTheme } from "./theme";

const FlexGrommet = styled(Grommet)`
  display: flex;
  flex-flow: column nowrap;
`;

const homePage: RouteObject = {
  path: "/home",
  element: <MainContent />,
};

const quotePage: RouteObject = {
  path: "/quote",
  element: <QuotePage />,
};

const root: RouteObject = {
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [homePage],
};

const router = createBrowserRouter([root]);

function App() {
  return (
    <FlexGrommet full theme={gufftiTheme}>
      <QuotesContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </QuotesContextProvider>
    </FlexGrommet>
  );
}

export default App;
