import { Grommet } from "grommet";
import { createBrowserRouter, Navigate, Outlet, RouteObject } from "react-router-dom";
import styled from "styled-components";
import { ErrorPage } from "./components/error-page/ErrorPage";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { MainContent } from "./components/main-content/MainContent";
import { QuotesContextProvider } from "./components/quotes/context/QuotesContextProvider";
import { QuotePage } from "./components/quotes/QuotePage";
import { gufftiTheme } from "./theme";

const FlexGrommet = styled(Grommet)`
  display: flex;
  flex-flow: column nowrap;
`;

const App = () => {
  return (
    <FlexGrommet full theme={gufftiTheme}>
      <QuotesContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </QuotesContextProvider>
    </FlexGrommet>
  );
};

const homePage: RouteObject = {
  path: "/",
  element: <MainContent />,
};

const redirectHomePage: RouteObject = {
  path: "/guffti",
  element: <MainContent />,
};

const quotePage: RouteObject = {
  path: "/quote",
  element: <QuotePage />,
};

const noMatch: RouteObject = {
  path: "*",
  element: <Navigate to="/" replace />,
};

const root: RouteObject = {
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [homePage, redirectHomePage, quotePage, noMatch],
};

export const router = createBrowserRouter([root]);
