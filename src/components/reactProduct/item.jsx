import React from "react";
import { useNavigate } from "react-router-dom";

const ReactProjectList = ({ item }) => {
  const locate = useNavigate();
  const showDetail = () => {
    locate(`/react/${item.id}`);
  };
  return (
    <div>
      <div className="img-container" onClick={showDetail}>
        <img src={item?.img} alt="" />
      </div>
      <div>
        <div onClick={showDetail}>보러가기</div>
      </div>
    </div>
  );
};

export default ReactProjectList;
