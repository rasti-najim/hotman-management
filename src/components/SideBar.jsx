import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
// import { FormattedMessage } from "react-intl";
import {
  FiSun,
  FiMoon,
  FiLogOut,
  FiBarChart,
  FiLayers,
  FiCommand,
  FiCalendar,
  FiSettings,
  FiCreditCard,
} from "react-icons/fi";
import { motion } from "framer";

// custom
// import { Context } from "../components/Wrapper";
import { useContext } from "react";

export default function SideBar({ theme, toggleTheme, setLoggedIn }) {
  //   const context = useContext(Context);

  return (
    <Container>
      {/* <Title>New Business</Title> */}
      <Title>Management</Title>
      <StyledLink exact to="/">
        <StyledFaHome />
        <Text>Analytics</Text>
      </StyledLink>
      <StyledLink exact to="/payments">
        <StyledFiCreditCard />
        <Text>Payments</Text>
      </StyledLink>
      <StyledLink to="/resevationsstaf">
        <StyledFaCalendarAlt />
        <Text>Reservations Staff</Text>
      </StyledLink>
      <StyledLink to="/rooms">
        <StyledFaBorderAll />
        <Text>Housekeeping Staff</Text>
      </StyledLink>
      <StyledLink to="/inventory">
        <StyledFaDollyFlatbed />
        <Text>Settings</Text>
      </StyledLink>
      <BottomContainer>
        <Button onClick={toggleTheme}>
          <h6>{theme == "light" ? <FiSun /> : <FiMoon />}</h6>
          {theme == "light" ? "Light" : "Dark"}
        </Button>
        {/* <Select value={context.locale} onChange={context.selectLanguage}>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </Select> */}
        <Button onClick={logout}>
          <h6>
            <FiLogOut />
          </h6>
          Logout
        </Button>
      </BottomContainer>
    </Container>
  );

  function logout() {
    window.localStorage.setItem("loggedIn", "false");
    setLoggedIn(false);
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 20vw;
  /* background-color: #536dfe; */
  /* #051937 */
  /* #605bff */
  /* #4a30e0 */
  background-color: ${({ theme }) => theme.body};
  /* background-color: #f7fafc; */
  /* background-color: #ffffff; */

  border-right: solid
    ${({ theme }) => (theme.mode == "light" ? "#f2f2f2" : "#2D2D30")};
  border-right-width: 1px;
`;

const StyledLink = styled(NavLink)`
  color: inherit;
  text-decoration: inherit;

  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding-left: 15px;
  padding-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: #536dfe;
    color: inherit;
    text-decoration: inherit;
    /* background-color: #000; */
  }

  &.active {
    background-color: #536dfe;
    color: inherit;
    text-decoration: inherit;
  }
`;

const Text = styled.p`
  font-size: 14px;
  margin-left: 10px;
  ${StyledLink}:hover & {
    color: #fff;
  }

  ${StyledLink}.active & {
    color: #fff;
  }
`;

const Title = styled.h5`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StyledFaHome = styled(FiBarChart)`
  position: relative;
  top: 2px;
  color: "#000";
  ${StyledLink}:hover & {
    color: #fff;
  }

  ${StyledLink}.active & {
    color: #fff;
  }
`;

const StyledFiCreditCard = styled(FiCreditCard)`
  position: relative;
  top: 2px;
  color: "#000";
  ${StyledLink}:hover & {
    color: #fff;
  }

  ${StyledLink}.active & {
    color: #fff;
  }
`;

const StyledFaCalendarAlt = styled(FiCalendar)`
  position: relative;
  top: 2px;
  color: "#000";
  ${StyledLink}:hover & {
    color: #fff;
  }

  ${StyledLink}.active & {
    color: #fff;
  }
`;

const StyledFaBorderAll = styled(FiLayers)`
  position: relative;
  top: 2px;
  color: "#000";
  ${StyledLink}:hover & {
    color: #fff;
  }

  ${StyledLink}.active & {
    color: #fff;
  }
`;

const StyledFaDollyFlatbed = styled(FiSettings)`
  position: relative;
  top: 2px;
  color: "#000";
  ${StyledLink}:hover & {
    color: #fff;
  }

  ${StyledLink}.active & {
    color: #fff;
  }
`;

const Button = styled(motion.button)`
  width: 50%;
  /* margin-left: 10px; */
  border: 2px solid;
  border-color: ${({ theme }) => (theme.mode == "light" ? "#000" : "#fff")};
  padding: 5px 20px;
  background-color: ${({ theme }) => theme.body};
  /* background-color: #536dfe; */
  /* background-color: #5469d4; */
  /* background-color: #1899ff; */
  /* background-color: #000; */
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  h6 {
    position: relative;
    top: 2px;
    margin-right: 5px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* background-color: #fff; */
`;

const Select = styled.select`
  width: 50%;
  background-color: ${({ theme }) => theme.body};
  padding: 5px 20px;
  border: 2px solid;
  border-color: ${({ theme }) => (theme.mode == "light" ? "#000" : "#fff")};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  border-radius: 5px;
  margin-bottom: 10px;
`;
