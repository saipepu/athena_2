import React, { useEffect, useState } from "react";
import "./WaterRising.css";
import water_level from "../../assets/water_level.png";
import pole1 from "../../assets/pole1.png";
import pole2 from "../../assets/pole2.png";
import pole3 from "../../assets/pole3.png";
import pole4 from "../../assets/pole4.png";
import pole5 from "../../assets/pole5.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";
import avatar from "../../assets/avatar.png";
import exp_img from "../../assets/exp_img.png";
import StartModel from "../../Components/StartModel/StartModel";
import GameOver from "../../Components/GameOver/GameOver";
import WaterRisingData from "../../api/WaterRisingData";
import { useLocation, useParams } from "react-router-dom";

const WaterRising = () => {

  const { role, id } = useParams();
  const { state } = useLocation();
  const course_id = state?.course_id;
  const employee = state?.employee;
  console.log(state);
  const sample = WaterRisingData;
  const [qNo, setQNo] = useState(0);
  const [waterHeight, setWaterHeight] = useState(90);
  const [correct, setCorrect] = useState(false);
  const [start, setStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const scale = 5;
  const [employeeScore, setEmployeeScore] = useState(0);

  const initialScore = {
    score1: 80,
    score2: 80,
    score3: 80,
    score4: 80,
    score5: 80,
  };
  const [score, setScore] = useState(initialScore);
  const participant = [
    {
      human: false,
      player: person1,
      pole: pole1,
      score: score.score1,
    },
    {
      human: false,
      player: person2,
      pole: pole2,
      score: score.score2,
    },
    {
      human: false,
      player: person3,
      pole: pole3,
      score: score.score3,
    },
    {
      human: true,
      player: person4,
      pole: pole4,
      score: score.score4,
    },
    {
      human: false,
      player: person5,
      pole: pole5,
      score: score.score5,
    },
  ];

  const IncreaseTheBotScores = () => {
    var boolean = false;
    //player1
    boolean =
      Math.floor(Math.random(Math.random()) * 10) % 2 === 0 ? false : true;
    score["score1"] = boolean ? score["score1"] - scale : score["score1"];
    //player2
    boolean =
      Math.floor(Math.random(Math.random()) * 10) % 2 === 0 ? false : true;
    score["score2"] = boolean ? score["score2"] - scale : score["score2"];
    //player3
    boolean =
      Math.floor(Math.random(Math.random()) * 10) % 2 === 0 ? false : true;
    score["score3"] = boolean ? score["score3"] - scale : score["score3"];
    //player5
    boolean =
      Math.floor(Math.random(Math.random()) * 10) % 2 === 0 ? false : true;
    score["score5"] = boolean ? score["score5"] - scale : score["score5"];
  };

  // Answering One Questions
  const submitAnswer = (e, ans) => {

    const form = document.querySelector("form");
    const human = document.getElementById("human");
    const water_level = document.getElementById("water_level");

    console.log(JSON.stringify(ans), JSON.stringify(sample[qNo].answer), ans === sample[qNo].answer)

    if (ans === JSON.stringify(sample[qNo].answer)) {
      setEmployeeScore(employeeScore + 1)
      setCorrect(true);
    } else {
      setCorrect(false);
    }

    setWaterHeight(waterHeight - 5);

    IncreaseTheBotScores();

    // Time Out after Answering One Question && Check if the Player is Drawn
    setTimeout(() => {
      if (qNo < sample?.length-1) {
        setQNo(qNo + 1);
      } else {
        setWin(true);
        setGameOver(!gameOver);
        setQNo(0);
        setWaterHeight(90);
        setScore(initialScore);
      }
      setCorrect(false);

      form.reset();

      const water_level_top = water_level.getBoundingClientRect().top;
      const human_top = human.getBoundingClientRect().top;
      const offset = water_level_top - human_top;
      // console.log(offset);

      if (offset < 10) {
        setGameOver(!gameOver);
        setWin(false);
        setWaterHeight(90);
        setScore(initialScore);
        setQNo(0);
      }
    }, 1000); // 1 sec
  };

  // Increase the Employee Score
  useEffect(() => {
    if (correct) {
      score["score4"] = score["score4"] - scale;
      setScore({ ...score });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correct]);

  // Increase Progress bar
  useEffect(() => {
    const bar = document.getElementById("bar");
    bar.style.width = qNo * 12.5 + "%";
  }, [qNo, gameOver]);

  return (
    <>
      <div className="wrapper">
        <div className="container">
          {/* <p>Game</p> */}
          <div className="water_container" id="container">
            <div className="progress_wrapper">
              <div className="info">
                <div className="name_container">
                  <p className="name">{employee.name}</p>
                </div>
                <div className="avatar">
                  <img src={avatar} alt="avatar" className="avatar_img" />
                </div>
              </div>
              <div className="progress_container">
                <div className="title">Experience Bar</div>
                <div className="progress">
                  <img src={exp_img} alt="exp" className="exp_img" />
                  <div className="progress_bar">
                    <div className="bar" id="bar"></div>
                    <div className="xp">XP</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Game Scene */}
            {!start ? (
              <>
                {/* pop layer */}
                <StartModel setStart={setStart} start={start} />
              </>
            ) : (
              <>
                {/* game screen layer */}
                <div className="pole_container">
                  {participant.map((player, index) => {
                    // console.log(player.score - waterHeight);
                    return (
                      <div
                        key={index.toString()}
                        className="p_container"
                        style={{
                          transform: `translateY(${player.score}%)`,
                          opacity: player.score - waterHeight >= 0 ? 0 : "100%",
                        }}
                      >
                        {player.human ? (
                          <div className="human_pole">
                            <div className="triangle"></div>
                            <img
                              src={player.player}
                              alt="human"
                              className="human_img"
                            />
                          </div>
                        ) : (
                          <img
                            src={player.player}
                            alt="person"
                            className="person_img"
                          />
                        )}
                        <img
                          src={player.pole}
                          alt="pole"
                          className="pole"
                          id={player.human ? "human" : "bot"}
                        />
                      </div>
                    );
                  })}
                  <img
                    src={water_level}
                    alt="water_level"
                    className="water_level"
                    id="water_level"
                    style={{ transform: `translateY(${waterHeight}%)` }}
                  />
                </div>
                {/* question layer */}
                <div className="question_container">
                  <div className="question">
                    <p>{sample[qNo].question}</p>
                  </div>
                  <form className="answers">
                    {sample[qNo].options.map((item, index) => (
                      // eslint-disable-next-line
                      <>
                        <input
                          style={{ display: "none" }}
                          type="radio"
                          key={index.toString()}
                          id={index}
                          onClick={(e) => submitAnswer(e, JSON.stringify(item))}
                          name="radio"
                        />
                        <label
                          className={
                            item === sample[qNo].answer
                              ? "ans correct"
                              : "ans wrong"
                          }
                          htmlFor={index}
                        >
                          {item}
                        </label>
                      </>
                    ))}
                  </form>
                </div>
              </>
            )}
            {/* Game Over */}
            {gameOver ? (
              <>
                <GameOver
                  setGameOver={setGameOver}
                  gameOver={gameOver}
                  win={win}
                  role={role}
                  id={id}
                  employee={employee}
                  course_id={course_id}
                  employeeScore={employeeScore}
                  numberOfQ={sample.length}
                />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WaterRising;
