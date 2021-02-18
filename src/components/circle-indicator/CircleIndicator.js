import React from "react";
import Heading from "./components/curvedText.js";
import Arrow from "./assets/arrow";
import Magnifier from "./assets/magnifier";
import IndicatorComponent from "./components/IndicatorComponent";
import Circle from "./components/circleComponent";
import "./styles/styles.css";

// To Do:
// Replace with svg, Dont need mask
// Add Context for props
// Add dynamic Opacity
// Replace curved text component with more accurate arc

// props (will change):
// indicatorsToShow: arr [{state: "on"}, {state: "off"}, {state: "broken"}]
// outerCircleOpacity: num
// backgroundTheme: arr
// currentBackground: num

const BGMASK = [
  "#226b9c",
  "#CB4335",
  "#8E44AD",
  "#21874C",
  "#CA6F1E",
  "#4B79A1",
];
export const CircleIndicator = ({
  indicatorsToShow = [
    { state: "on" },
    { state: "off" },
    { state: "broken" },
    { state: "on" },
    { state: "off" },
    { state: "broken" },
    { state: "broken" },
    { state: "on" },
  ],
  outerCircleOpacity = 0.37,
  innerCircleOpacity = 0.25,
  backgroundTheme = [
    [["#216f9c,#24749e,#3e87b4,#327fad,#24749e,#24749e,#226b9c"]],
  ],
  currentBackground = 0,
  ...restProps
}) => {
  return (
    <div className="container">
      <Circle
        bgColor={`rgba(255, 255, 255, ${outerCircleOpacity})`}
        circleClass={"outer-circle"}
      >
        <IndicatorComponent indicatorsToShow={indicatorsToShow} />
        <Circle
          circleClass={"inner-circle"}
          bgImage={`linear-gradient(
    to right,${backgroundTheme[currentBackground]}
  )`}
        >
          <Circle
            bgColor={`rgba(255, 255, 255,${innerCircleOpacity})`}
            circleClass={"inner-circle-segmented"}
          >
            <Heading
              text={"Circle Name"}
              arc={155}
              radius={62}
              arcTransform={2.1}
            />
            <div className="svg-arrow">
              <Arrow />
            </div>
            <div className="svg-magnifier">
              <Magnifier />
            </div>
            <div
              className="inner-horizontal-divider"
              style={{
                backgroundColor: BGMASK[currentBackground],
              }}
            ></div>
            <div
              className="inner-vertical-divider"
              style={{
                backgroundColor: BGMASK[currentBackground],
              }}
            ></div>
            <Circle
              circleClass={"circle-center"}
              bgColor={BGMASK[currentBackground]}
            />
          </Circle>
        </Circle>
      </Circle>
    </div>
  );
};
