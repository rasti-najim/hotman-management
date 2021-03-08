import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

// custom
import SideBar from "./components/SideBar";
import Analytics from "./pages/Analytics";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";
import ReservsStaff from "./pages/ReservsStaff";

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
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="App">
        <Router>
          <Container>
            <SideBar theme={theme} toggleTheme={toggleTheme} />
            <Switch>
              <Route exact path="/" component={Analytics} />
              <Route exact path="/resevationsstaf" component={ReservsStaff} />
            </Switch>
          </Container>
        </Router>
      </div>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: #f2f2f2; */
  /* background: #fff; */
`;

export default App;
