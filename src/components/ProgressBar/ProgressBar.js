import { useEffect, useMemo, useRef } from "react";
import "./ProgressBar.css";

export default function ({
  value,
  minValue,
  maxValue,
  width,
  height,
  fgColor,
  fgSecondary,
  bgColor,
  loading,
}) {
  const progPercent = useMemo(() => {
    const min = minValue ? minValue : 0;
    return value / (maxValue - min);
  }, [value, minValue, maxValue]);
  const progBarFront = useRef();

  useEffect(() => {
    progBarFront.current.style.setProperty("--value", `${progPercent * 100}%`);
    progBarFront.current.style.setProperty("--width", width);
    progBarFront.current.style.setProperty("--fg-color", `${fgColor}`);
    progBarFront.current.style.setProperty(
      "--fg-secondary",
      `${fgSecondary ? fgSecondary : ""}`
    );
  }, [width, fgColor, fgSecondary, progPercent]);

  return (
    <>
      <div className="progress-bar-container" style={{ width, height }}>
        <div
          className="progress-bar-back"
          style={{ background: bgColor }}
        ></div>
        <div
          ref={progBarFront}
          className={`progress-bar-front ${loading ? "loading" : ""}
          `}
        ></div>
      </div>
    </>
  );
}
