import React from "react";
import "./Navbar.scss";
import ProgressBar from "react-customizable-progressbar";
const Loading = (props) => {
  return (
    <>
      <div>메인 스킬</div>
      <div className="loadingContainer">
        <div className="html">
          <div className=" progressBar progressBar1">
            <ProgressBar
              progress="70"
              radius={100}
              strokeWidth={12}
              strokeColor="#F16524"
              trackStrokeWidth={4}
              pointerRadius={8}
              pointerStrokeWidth={5}
              pointerStrokeColor="var(--main-color)"
            ></ProgressBar>
          </div>
        </div>
        <div className="css">
          <div className="progressBar progressBar2">
            <ProgressBar
              progress="80"
              radius={100}
              strokeWidth={12}
              strokeColor="#2465F1"
              trackStrokeWidth={4}
              pointerRadius={8}
              pointerStrokeWidth={5}
              pointerStrokeColor="var(--main-color)"
            ></ProgressBar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
