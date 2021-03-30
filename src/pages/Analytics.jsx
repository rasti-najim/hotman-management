import { useEffect, useState, useMemo, useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
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
import useWindowSize from "../components/useWindowSize";
import Loading from "../components/Loading";

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
  const size = useWindowSize();

  return (
    <StyledContainer>
      <h1>Analytics</h1>
      <CardsContainer>
        <Card title="Arrivals" number={54} />
        <Card title="Departures" number={12} />
        <Card title="Rooms Occupied" number={50} />
      </CardsContainer>
      <h2>Today</h2>
      <Row>
        <TodayChartContainer>
          <TodayChart />
        </TodayChartContainer>
      </Row>
      <h2>Reports overview</h2>

      <div>
        <Row>
          <StyledCol>
            <Chart
              title="Gross Volume"
              data={data.filter(function (value) {
                return value.date.includes("2007");
              })}
              accessor={accessor}
            />
          </StyledCol>
          <StyledCol>
            <Chart
              title="MRR"
              data={data.filter(function (value) {
                return value.date.includes("2008");
              })}
              accessor={accessor}
            />
          </StyledCol>
        </Row>
        <Row>
          <StyledCol>
            <Chart
              title="ARR"
              data={data.filter(function (value) {
                return value.date.includes("2009");
              })}
              accessor={accessor}
            />
          </StyledCol>
          <StyledCol>
            <Chart
              title="New Customers"
              data={data.filter(function (value) {
                return value.date.includes("2010");
              })}
              accessor={accessor}
            />
          </StyledCol>
        </Row>
      </div>
      <div style={{ marginTop: 40 }}>
        <BarChart width={0.6 * size.width} height={500} />
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
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

const TodayChartContainer = styled(Col)`
  background-color: ${({ theme }) => theme.body};
  border-radius: 14px;
  margin: 10px;
`;

const StyledCol = styled(Col)`
  background-color: ${({ theme }) => theme.body};
  border-radius: 14px;
  margin: 10px;
`;
