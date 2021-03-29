import { useEffect, useState, useMemo, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { Frame, Page, Stack, useCycle } from "framer";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { cityTemperature, appleStock } from "@visx/mock-data";
import { format } from "date-fns";
import { Group } from "@visx/group";

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

const margin = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 80,
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

      <div>
        <Row>
          <Col>
            <Chart
              title="Gross Volume"
              data={data.filter(function (value) {
                return value.date.includes("2007");
              })}
              accessor={accessor}
            />
          </Col>
          <Col>
            <Chart
              title="MRR"
              data={data.filter(function (value) {
                return value.date.includes("2008");
              })}
              accessor={accessor}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Chart
              title="ARR"
              data={data.filter(function (value) {
                return value.date.includes("2009");
              })}
              accessor={accessor}
            />
          </Col>
          <Col>
            <Chart
              title="New Customers"
              data={data.filter(function (value) {
                return value.date.includes("2010");
              })}
              accessor={accessor}
            />
          </Col>
        </Row>
      </div>
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

const StyledRow = styled(Row)`
  justify-content: space-around;
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
