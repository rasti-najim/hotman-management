import React, { useEffect } from "react";
import { appleStock } from "@visx/mock-data";
import { Group } from "@visx/group";
import { Bar, AreaClosed, LinePath } from "@visx/shape";
import { scaleLinear, scaleBand, scaleTime } from "@visx/scale";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { curveNatural } from "@visx/curve";
import { Text } from "@visx/text";
// import { LinearGradient, GradientPinkBlue } from "@visx/gradient";
import { extent, max } from "d3-array";

const data = appleStock;

// Define the graph dimensions and margins
const width = 750;
const height = 400;
const margin = { top: 60, bottom: 60, left: 80, right: 80 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// We'll make some helpers to get at the data we want
const x = (d) => new Date(d.date);
const y = (d) => d.close;

const xScale = scaleTime({
  range: [0, xMax],
  domain: extent(data, x),
});

const yScale = scaleLinear({
  range: [yMax, 0],
  domain: [0, max(data, y)],
});

// const xScale = scaleBand({
//   range: [0, xMax],
//   domain: data.map(x),
//   padding: 0.4,
//   round: true,
// });

// const yScale = scaleLinear({
//   range: [yMax, 0],
//   domain: [0, Math.max(...data.map(y))],
//   round: true,
// });

// Compose together the scale and accessor functions to get point functions
const compose = (scale, accessor) => (data) => scale(accessor(data));
const xPoint = compose(xScale, x);
const yPoint = compose(yScale, y);

export default function BarChart() {
  useEffect(() => console.log(data));
  return (
    <svg width={width} height={height}>
      <Text verticalAnchor="start" scaleToFit={true} dx={120} dy={100}>
        Hello world
      </Text>
      <Group top={margin.top} left={margin.left}>
        <AxisLeft
          scale={yScale}
          top={0}
          left={0}
          label="Close Price ($)"
          stroke="grey"
        />
        <AxisBottom
          scale={xScale}
          top={yMax}
          label="Years"
          stroke="grey"
          tickTextFill="grey"
        />
        {/* <LinearGradient from="#fbc2eb" to="#a6c1ee" id="gradient" /> */}
        {/* <GradientPinkBlue id="gradient" /> */}
        <LinePath
          data={data}
          xScale={xScale}
          yScale={yScale}
          x={xPoint}
          y={yPoint}
          stroke="#FF0033"
          curve={curveNatural}
        />
        {/* <AreaClosed
          data={data}
          xScale={xScale}
          yScale={yScale}
          x={xPoint}
          y={yPoint}
          //   fill="url(#gradient)"
          fill="#FF0033"
        /> */}
      </Group>
    </svg>
  );
}
