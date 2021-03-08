import { useEffect, useState, useMemo, useContext } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { Frame, Page, Stack, useCycle } from "framer";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import StaffCard from "../components/StaffCard";

export default function ReservsStaff() {
  return (
    <Container>
      <h1>Reservations Staff</h1>
      <StyledRow>
        <StaffCard available />
        <StaffCard occupied />
        <StaffCard unavailable />
      </StyledRow>
    </Container>
  );
}

const Container = styled(motion.div)`
  height: 90vh;
  width: 80vw;
  padding-left: 30px;
  padding-right: 30px;
  /* background: ${({ theme }) => theme.background}; */
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const StyledRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;
