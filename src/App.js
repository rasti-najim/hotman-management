import { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled, {
  createGlobalStyle,
  css,
  ThemeProvider,
} from "styled-components";

// custom
import SideBar from "./components/SideBar";
import Analytics from "./pages/Analytics";
import Payments from "./pages/Payments";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";
import ReservsStaff from "./pages/ReservsStaff";
import { Context } from "./components/Wrapper";

import Login from "./pages/login";

const GlobalStyle = createGlobalStyle`
  body {
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Nunito', sans-serif;
    /* background-color: #f7fafc; */
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    box-sizing: border-box;
    overscroll-behavior: none;
  }
`;

function App() {
  const [loggedIn, setLoggedIn] = useState();
  const [theme, toggleTheme] = useDarkMode();
  const context = useContext(Context);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      {/* <Login setLoggedIn={setLoggedIn} /> */}
      <div className="App">
        <Router>
          <Container lang={context.locale}>
            <SideBar theme={theme} toggleTheme={toggleTheme} />
            <Switch>
              <Route exact path="/" component={Analytics} />
              <Route path="/payments" component={Payments} />
              <Route path="/resevationsstaf" component={ReservsStaff} />
            </Switch>
          </Container>
        </Router>
      </div>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  /* background-color: #f2f2f2; */
  /* background: #fff; */

  ${(props) =>
    props.lang === "en"
      ? css`
          flex-direction: row;
        `
      : css`
          flex-direction: row-reverse;
        `}
`;

export default App;
