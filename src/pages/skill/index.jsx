import React, { useState, useEffect } from "react";
import ProgressBar from "react-customizable-progressbar";
import "./index.scss";

const Index = (props) => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  console.log(props.progress);
  console.log(percentage);
  useEffect(() => {
    if (loading) {
      let interval = setInterval(() => {
        setPercentage((prev) => {
          if (percentage < props.progress) {
            return prev + 1;
          }
        });
      });
      if (percentage >= props.progress) {
        clearInterval(interval);
        setLoading(true);
      }
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      {loading && (
        <ProgressBar
          progress="80"
          radius={100}
          strokeWidth={12}
          strokeColor="#FF69B4"
          trackStrokeWidth={4}
          pointerRadius={8}
          pointerStrokeWidth={5}
          pointerStrokeColor="#FF69B4"
        ></ProgressBar>
      )}
    </>
  );
};

export default Index;
