import { useEffect, useState, useMemo, useContext } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { Frame, Page, Stack, useCycle } from "framer";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { cityTemperature, appleStock } from "@visx/mock-data";
import { format } from "date-fns";

// custom
import Card from "../components/Card";
import TodayChart from "../components/TodayChart";
import Chart from "../components/Chart";
import BarChart from "../components/BarChart";

const data = appleStock;

const accessor = {
  x: (d) => format(new Date(d.date), "MMM dd"),
  y: (d) => d.close,
};

export default function Analytics() {
  return (
    <Container>
      <h1>Analytics</h1>
      <CardsContainer>
        <Card title="Arrivals" number={54} />
        <Card title="Departures" number={12} />
        <Card title="Rooms Occupied" number={50} />
      </CardsContainer>
      <h2>Today</h2>
      <TodayChart />
      <h2>Reports overview</h2>

      <Chart
        data={data.filter(function (value) {
          return value.date.includes("2007");
        })}
        accessor={accessor}
      />
      <Chart
        data={data.filter(function (value) {
          return value.date.includes("2007");
        })}
        accessor={accessor}
      />
    </Container>
  );
}

const Container = styled(motion.div)`
  height: 90vh;
  width: 80vw;
  padding-left: 30px;
  /* background: ${({ theme }) => theme.background}; */
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const CardsContainer = styled(Row)`
  justify-content: space-around;
  margin-bottom: 2rem;
`;
