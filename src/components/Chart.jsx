import {
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  Axis,
  AreaSeries,
} from "@visx/xychart";
import {
  curveNatural,
  curveBasis,
  curveBasisOpen,
  curveCardinal,
} from "@visx/curve";
import { cityTemperature, appleStock } from "@visx/mock-data";
import { useEffect } from "react";
import faker from "faker";
import { format } from "date-fns";
import styled, { css } from "styled-components";

// const accessors = {
//   x: {
//     "New York": (d) => d.date,
//     "San Francisco": (d) => d.date,
//     Austin: (d) => d.date,
//   },
//   y: {
//     "New York": (d) => d["New York"],
//     "San Francisco": (d) => d["San Francisco"],
//     Austin: (d) => d.Austin,
//   },
// };

const nycAccessors = {
  xAccessor: (d) => d.date,
  yAccessor: (d) => d["New York"],
};

const sfAccessors = {
  xAccessor: (d) => d.date,
  yAccessor: (d) => d["San Francisco"],
};

const austinAccessors = {
  xAccessor: (d) => d.date,
  yAccessor: (d) => d.Austin,
};

export default function Chart({ title, data, accessor }) {
  useEffect(() => console.log(cityTemperature));
  return (
    <>
      <TitleContainer>
        <div>
          <span>{title}</span>
          <h5>$4,000,000</h5>
        </div>
        <div>
          <Growth increase>+6.7%</Growth>
        </div>
      </TitleContainer>
      <XYChart
        height={300}
        xScale={{ type: "band" }}
        yScale={{ type: "linear" }}
        margin={{ top: 60, bottom: 60, left: 20, right: 80 }}
      >
        {/* <Text verticalAnchor="start" scaleToFit={true} dx={80} dy={60}>
          Gross Volume
        </Text> */}
        <Axis
          orientation="bottom"
          tickStroke="grey"
          stroke="grey"
          numTicks={1}
        />
        {/* <Axis orientation="left" tickStroke="grey" stroke="grey" /> */}
        {/* <AnimatedGrid columns={false} numTicks={4} /> */}
        <AnimatedLineSeries
          dataKey="Apple Stock"
          data={data}
          xAccessor={accessor.x}
          yAccessor={accessor.y}
          curve={curveNatural}
          stroke="#536dfe"
        />
        <Tooltip
          snapTooltipToDatumX
          snapTooltipToDatumY
          showVerticalCrosshair
          showSeriesGlyphs
          renderTooltip={({ tooltipData }) => (
            <div>
              <div style={{ color: "#536dfe" }}>
                {tooltipData.nearestDatum.key}
              </div>
              <br />
              {accessor.x(tooltipData.nearestDatum.datum)}
              {", "}
              {accessor.y(tooltipData.nearestDatum.datum)}
            </div>
          )}
        />
      </XYChart>
    </>
  );
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  left: 20px;
  top: 60px;

  span {
    color: #494e62;

    h5 {
      color: #000;
      font-weight: bold;
    }
  }
`;

const Growth = styled.sub`
  margin-left: 1rem;
  color: #000;
  font-weight: bold;
  padding: 5px;
  position: relative;
  bottom: 0.5px;

  border-radius: 5px;

  ${(props) =>
    props.increase &&
    css`
      /* background-color: #00bfa6; */
      background-color: #00d4b7;
    `}

  ${(props) =>
    props.decrease &&
    css`
      /* background-color: #f9a826; */
      background-color: #fbc163;
    `}
`;
