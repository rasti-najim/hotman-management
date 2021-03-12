import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";

const errorVariants = {
  start: { pathLength: 0 },
  end: { pathLength: 1 },
};

const successVariants = {
  start: { pathLength: 0 },
  end: { pathLength: 1 },
};

const circleVariants = {
  normal: { stroke: "#536dfe" },
  success: { stroke: "#00BFA6" },
};

export default function AnimatedTick({ tapped, size }) {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "#ff008c",
    "#536dfe",
    "#e6ff00",
    // "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    // "linear-gradient(180deg, #536dfe 0%, rgb(68, 0, 255) 100%)",
    // "linear-gradient(180deg, #e6ff00 0%, rgb(3, 209, 0) 100%)",
  ]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)",
  ]);

  return (
    <svg viewBox="0 0 50 50" width={size} height={size}>
      <motion.path
        fill="none"
        strokeWidth="2"
        // stroke="rgb(68, 0, 255)"
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ translateX: 5, translateY: 5 }}
        variants={circleVariants}
        initial="normal"
        animate={tapped ? "success" : "normal"}
      />
      <motion.path
        fill="none"
        strokeWidth="2"
        stroke="#000"
        d="M14,26 L 22,33 L 35,16"
        strokeDasharray="0 1"
        // style={{ pathLength: tickPath }}
        variants={successVariants}
        initial="start"
        animate={tapped ? "end" : "start"}
      />
      <motion.path
        fill="none"
        strokeWidth="2"
        stroke="#000"
        // stroke={color}
        d="M17,17 L33,33"
        strokeDasharray="0 1"
        variants={errorVariants}
        initial="start"
        // animate={tapped ? "end" : "start"}
        // style={{ pathLength: crossPathA }}
      />
      <motion.path
        fill="none"
        strokeWidth="2"
        stroke="#000"
        d="M33,17 L17,33"
        strokeDasharray="0 1"
        variants={errorVariants}
        initial="start"
        // animate={tapped ? "end" : "start"}
        // style={{ pathLength: crossPathB }}
      />
    </svg>
  );
}
