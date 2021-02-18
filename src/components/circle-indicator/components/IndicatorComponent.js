import React from "react";
import x from "../assets/x.png";

// Props: indicatorsToShow : arr [{state: "on", {state: "off"}, state: "broken"}];

const IndicatorComponent = ({ indicatorsToShow }) => {
  // Dynamically set indicator length, depending on No. Indicators
  const indicatorLength = 100 / indicatorsToShow.length - 0.6;

  const FindMiddleAngle = (i) => {
    let offset = i === 0 ? 24.7 : 100 - indicatorLength * i + 24.7 - i * 0.6;
    let realOffset = offset / 25;
    let offsetAngleDegrees = -(90 * realOffset);
    let angle = ((indicatorLength / 100) * 360) / 2 + offsetAngleDegrees;
    return angle * (Math.PI / 180);
  };
  const placeXIcon = (indicator, i) => {
    if (indicator.state === "broken") {
      return (
        <image
          href={x}
          height="4.5"
          width="4.5"
          // inaccurate solution to centering icon:
          x={`${15.91549430918954 * Math.cos(FindMiddleAngle(i)) + 18.9}`}
          y={`${15.91549430918954 * Math.sin(FindMiddleAngle(i)) + 18.5}`}
        />
      );
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        width: `17rem`,
        height: `17rem`,
      }}
    >
      <svg width="100%" height="100%" viewBox={`0 0 42 42`}>
        {indicatorsToShow.map((indicator, i) => {
          return (
            <React.Fragment key={i}>
              <circle
                // pointerEvents='stroke' // Removed OnClick
                className="svg-indicator"
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke={
                  indicator.state === "on"
                    ? "#b7c6ce"
                    : indicator.state === "off"
                    ? "#657e94"
                    : "#c53030"
                }
                strokeWidth="2"
                strokeDasharray={`${indicatorLength} ${100 - indicatorLength}`} // length, length of gap
                strokeDashoffset={
                  i === 0
                    ? "24.7"
                    : `${100 - indicatorLength * i + 24.7 - i * 0.6}`
                }
                // Removed indicator change onClick
              ></circle>
              {placeXIcon(indicator, i)}
            </React.Fragment>
          );
        })}
      </svg>
    </div>
  );
};

export default IndicatorComponent;
