import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

function LogoPage() {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/home");
    }, 10000);
  };

  const txt = "천기범입니다";
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]);
      setCount(Count + 1);
    }, 100);
    if (Count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="logoPageDiv">
      <div className="textBox">
        <h1>
          <span className="highlight">하늘</span>의
          <span className="blindSpace">빈</span>
          <span className="highlight">기운</span>
        </h1>
        <h1>
          을<span className="blindSpace">빈</span>
          <span className="highlight">내려받고</span>
        </h1>
        <h1>
          태어난<span className="highlight">호랑이</span>
        </h1>
        <h1>
          <span className="blindSpace">빈</span>
          신입개발자
        </h1>
        <h1>
          <span className="introTitle">{Text}</span>
        </h1>
      </div>
    </div>
  );
}

export default LogoPage;
