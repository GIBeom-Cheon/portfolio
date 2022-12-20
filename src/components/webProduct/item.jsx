import React from "react";
import { useNavigate } from "react-router-dom";

const WebProjectList = ({ item }) => {
  const locate = useNavigate();
  const showDetail = () => {
    locate(`/web/${item.id}`);
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

export default WebProjectList;
