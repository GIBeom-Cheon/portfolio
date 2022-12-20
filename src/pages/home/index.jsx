import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/about");
  };

  return (
    <div className="homeContainer">
      <div className="homeImgBox" onClick={navigateToAbout}>
        <svg version="1.1" viewBox="0 0 400 400">
          <text className="stroke" x="11%" y="30%" textAnchor="middle">
            G
          </text>
          <text className="stroke" x="22%" y="30%" textAnchor="end">
            I
          </text>
          <text className="stroke" x="33%" y="30%" textAnchor="middle">
            B
          </text>
          <text className="stroke" x="44%" y="30%" textAnchor="middle">
            E
          </text>
          <text className="stroke" x="57%" y="30%" textAnchor="middle">
            O
          </text>
          <text className="stroke" x="65%" y="30%" textAnchor="start">
            M
          </text>
          <text className="stroke" x="80%" y="30%" textAnchor="start">
            'S
          </text>
          <text className="stroke" x="11%" y="70%" textAnchor="middle">
            P
          </text>
          <text className="stroke" x="22%" y="70%" textAnchor="middle">
            O
          </text>
          <text className="stroke" x="33%" y="70%" textAnchor="middle">
            R
          </text>
          <text className="stroke" x="42%" y="70%" textAnchor="middle">
            T
          </text>
          <text className="stroke" x="51%" y="70%" textAnchor="middle">
            F
          </text>
          <text className="stroke" x="63%" y="70%" textAnchor="middle">
            O
          </text>
          <text className="stroke" x="74%" y="70%" textAnchor="middle">
            L
          </text>
          <text className="stroke" x="80%" y="70%" textAnchor="middle">
            I
          </text>
          <text className="stroke" x="89%" y="70%" textAnchor="middle">
            O
          </text>
        </svg>
        {/* <img src="./img/2.jpg" alt="main" /> */}
      </div>
      {/* <h2 className="mainText">
        Gi Beom Cheon's
        <br />
        PortFolio
      </h2> */}
      {/* <button onClick={navigateToAbout} className="buttonText">
        S T A R T
      </button> */}
    </div>
  );
};

export default Home;
