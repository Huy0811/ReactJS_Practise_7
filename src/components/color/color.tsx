import React, { useEffect, useState } from "react";
import "./color.css";

type ColorProps = {
  style: React.CSSProperties;
};

const Color = (props: ColorProps) => {
  return <div className="box" style={props.style}></div>;
};

export default Color;
