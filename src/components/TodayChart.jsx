import {
  Axis,
  Grid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
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

// const data = cityTemperature;
// const data = new Array(100).fill(true).map(() => ({
//   revenue: faker.random.number(),
//   date: faker.date.past(),
// }));
const data = appleStock;

const accessor = {
  x: (d) => format(new Date(d.date), "MMM dd"),
  y: (d) => d.close,
};

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

export default function TodayChart() {
  useEffect(() => console.log(cityTemperature));
  return (
    <>
      <TitleContainer>
        <span>Gross Volume</span>
        <h5>$4,000,000</h5>
      </TitleContainer>
      <XYChart
        height={300}
        xScale={{ type: "band" }}
        yScale={{ type: "linear" }}
        margin={{ top: 60, bottom: 60, left: 10, right: 80 }}
      >
        <Axis orientation="bottom" />
        {/* <Axis orientation="left" /> */}
        {/* <Grid columns={false} numTicks={4} /> */}
        <AnimatedLineSeries
          dataKey="Apple Stock"
          data={data.filter(function (value) {
            return value.date.includes("2011");
          })}
          // {...nycAccessors}
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
          renderTooltip={({ tooltipData, colorScale }) => (
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
