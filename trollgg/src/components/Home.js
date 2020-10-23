import React, { useState } from "react";
import NoMatch from "./Statistics";
import { Auth, URL_HEADER } from "../util/Auth";
const Home = (props) => {
  console.log("난 home이야");
  const [summonerName, setSummonerName] = useState("");

  const moveToSummonerPage = (summonerName) => {
    document.location.href = `/TrollSearchResult?name=${summonerName}`;
  };

  const handleKeyPress = (e) => {
    e.preventDefault();
    console.log("눌림");
    if (e.key === "Enter") {
      moveToSummonerPage(e.target.value);
    }
  };

  return (
    <div style={styles.container}>
      <div style={{ marginBottom: "40px" }}>
        <img
          style={styles.topImage}
          src="https://attach.s.op.gg/logo/20200610124936.f53f670b00d598130e25a1f1549a4a6f.png"
          title="이즈리얼과 카이사"
          alt="OP.GG Logo (이즈리얼과 카이사)"
        ></img>
      </div>

      <div style={styles.topSpan}>
        <input
          style={styles.input}
          placeholder="소환사 이름"
          value={summonerName}
          onChange={(e) => setSummonerName(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e)}
          name="name"
        />

        <button
          style={styles.button}
          children={"검색"}
          color={"#464964"}
          background={"#e2e2e2"}
          onClick={() => moveToSummonerPage(summonerName)}
        ></button>
      </div>
    </div>
  );
};
export default Home;

const styles = {
  container: {
    display: "flex",
    width: "100%",
    height: "500px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundSize: "cover",
  },

  topImage: {
    width: "1000px",
    height: "300px",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px auto",
  },

  topSpan: {
    display: "block",
  },

  input: {
    width: "624px",
    height: " 50px",
    marginRight: "10px",
    border: " 3px solid green",
  },

  button: {
    width: "70px",
    height: "50px",
    margin: "0px auto",
    border: "none",
    borderRadius: "5px",
    fontSize: "15pt",
  },
};
