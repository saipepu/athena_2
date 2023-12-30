import React, { useState, useEffect } from "react";
import avatar from "../../assets/avatar.png";
import exp_img from "../../assets/exp_img.png";
import "./StoryBased.css";
import treasure_chest from "../../assets/treasure_chest.png";
import { useLocation, useNavigate } from "react-router-dom";
import getSheetData from "../../api/StoryBasedData";
import { useParams } from "react-router-dom";
import { updateEmployee } from "../../api/server_routes";

const StoryBased = () => {
  const { state } = useLocation();
  const course_id = state?.course_id;
  const employee = state?.employee;
  const [progressCount, setProgressCount] = useState(0);
  const [nextSceneCount, setNextSceneCount] = useState(0);
  const [start, setStart] = useState(true);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [click, setClick] = useState(false);
  const [blockNextScene, setBlockNextScene] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [response, setResponse] = useState();

  const [scenes, setScenes] = useState([]);

  const { role, id } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    async function fetchScenes() {
      const data = await getSheetData();
      setScenes(data);
    }
    fetchScenes();
  }, []);

  useEffect(() => {
    if (!scenes || !scenes.length) return;
    const bar = document.getElementById("bar");
    bar.style.width = progressCount * 12.5 + "%";

    if (nextSceneCount === scenes.length - 1) {
      setTimeout(() => {
        setGameOver((gameOver) => (gameOver = true));

        if (score <= 30) {
          setScore(5);
        } else if (score >= 30) {
          setScore(10);
        }
      }, 1000);
    }

    if (scenes[nextSceneCount].scene === "question") {
      setClick(false);

      if (click === true) {
        setBlockNextScene((blockNextScene) => (blockNextScene = false));
      } else {
        setBlockNextScene((blockNextScene) => (blockNextScene = true));
      }
      setBlockNextScene(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextSceneCount]);

  const nextScene = () => {
    if (scenes[nextSceneCount].goTo) {
      return setNextSceneCount(Number(scenes[nextSceneCount].goTo));
    } else if (nextSceneCount === scenes.length - 1) {
      return nextSceneCount;
    } else {
      if (scenes[nextSceneCount].scene === "question") {
        if (click === true) {
          setNextSceneCount(nextSceneCount + 1);
        }
      } else {
        setNextSceneCount(nextSceneCount + 1);
      }
    }
    setStart(false);
  };

  const backScene = (scene) => {
    function isNumber(n) {
      return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
    }
    if (isNumber(scene?.customeBackScene)) {
      setNextSceneCount(scene.customeBackScene);
    } else if (nextSceneCount >= scenes.length - 1) {
      setNextSceneCount(nextSceneCount - 1);
    } else {
      setNextSceneCount(nextSceneCount - 1);
    }
  };

  const submitAnswer = (goToQuestionSceneID, reward) => {
    setClick((click) => (click = true));
    setTimeout(() => {
      setNextSceneCount(Number(goToQuestionSceneID));
      setProgressCount((point) => (point += reward));
      if (reward === 0.5) {
        setScore((score) => (score += 5));
      } else if (reward === 1) {
        setScore((score) => (score += 10));
      }
    }, 1000);
  };

  function ScenesCheck() {
    if (typeof scenes === "undefined") return;
    if (scenes.length === 0) return;
    return true;
  }

  let setMiliToHour = 0;
  function miliToHour(mili) {
    return (mili / (1000 * 60)) % 60;
  }

  async function isGameOver() {
    if (gameOver) {
      const startTime = localStorage.getItem("startTime");
      const endTime = new Date().getTime();
      const elapsedTime = endTime - startTime;
      setMiliToHour = miliToHour(elapsedTime);
      employee.hr_of_training = parseInt(
        employee?.hr_of_training + setMiliToHour
      );

      employee.ATH = employee?.ATH + 1;
      employee.exp = employee?.exp + score;
      for (let x in employee?.inProgress) {
        // eslint-disable-next-line eqeqeq
        if (course_id == employee?.inProgress[x].course_id) {
          employee.inProgress[x].quiz = true;
        }
      }
      updateEmployee(role, id, employee, setResponse);
    }
  }

  // eslint-disable-next-line eqeqeq
  let isLast = nextSceneCount == scenes?.length - 1;

  return (
    <div className="wrapper">
      {ScenesCheck() ? (
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}${scenes[nextSceneCount].background})`,
          }}
          className="Scontainer"
        >
          {/* Button  */}
          {start ? (
            <button
              disabled={gameOver || blockNextScene}
              className="start_btn"
              onClick={nextScene}
            >
              Start!
            </button>
          ) : (
            <button className="next_btn" onClick={nextScene}></button>
          )}

          {isLast || (!start && scenes[nextSceneCount]?.scene !== "start") ? (
            <button
              disabled={gameOver || blockNextScene}
              className="back_btn"
              onClick={() => backScene(scenes[nextSceneCount])}
            ></button>
          ) : null}
          {start ? (
            <h1 className="storyBasedtitle">{scenes[nextSceneCount].text}</h1>
          ) : null}

          {/* Process bar */}
          <div className="progress_wrapper">
            <div className="info">
              <div className="name_container">
                <p className="name">{employee.name.toUpperCase()}</p>
              </div>
              <div className="avatar">
                <img src={avatar} alt="avatar" className="avatar_img" />
              </div>
            </div>
            <div className="progress_container">
              <div className="title">Experience Bar</div>
              <div className="progress">
                <img width="25px" height="25px" src={exp_img} alt="exp" className="exp_img" />
                <div className="progress_bar">
                  <div className="bar" id="bar"></div>
                  <div className="xp">{score} XP</div>
                </div>
              </div>
            </div>
          </div>

          {gameOver ? (
            <div
              style={{ zIndex: 20, backgroundImage: `url()` }}
              className="model_wrapper"
            >
              <div className="gameOver">
                <div className="media_container">
                  <img
                    src={treasure_chest}
                    alt="treasure_chest"
                    className="media"
                  />
                </div>
                <div className="content">
                  <p className="title">
                    You have earn <span>1 Token</span> and{" "}
                    <span>{score} XP</span> today.
                  </p>
                </div>
                <div className="btn_gp">
                  <button
                    className="go_to_home"
                    onClick={() => {
                      setGameOver(!gameOver);
                      navigation(`/dashboard/${role}/${id}`);
                    }}
                  >
                    Go to Home
                  </button>
                  <button
                    className="claim_reward"
                    onClick={() => {
                      isGameOver();
                      setGameOver(!gameOver);
                      navigation(`/dashboard/${role}/${id}`);
                    }}
                  >
                    Claim Reward
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          {start ? (
            <>
              <div
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}${scenes[nextSceneCount].avatar})`,
                  backgroundSize: `${scenes[nextSceneCount].backgroundSize}px`,
                }}
                className="StartPosition"
              ></div>
            </>
          ) : (
            <>
              {scenes[nextSceneCount]?.scene === "employee" ? (
                <>
                  <div className="employeeSpeakbubble">
                    <p className="hisir">{scenes[nextSceneCount].text}</p>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}${scenes[nextSceneCount].avatar})`,
                      backgroundSize: `${scenes[nextSceneCount].backgroundSize}px`,
                    }}
                    className="employeePosition"
                  ></div>
                </>
              ) : (
                <div>
                  {scenes[nextSceneCount]?.scene === "question" ? (
                    <>
                      {scenes[nextSceneCount].avatar === undefined ? null : (
                        <div
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}${scenes[nextSceneCount].avatar})`,
                            backgroundSize: `${scenes[nextSceneCount].backgroundSize}px`,
                          }}
                          className="employeePosition"
                        ></div>
                      )}
                      <div className="containerquestion">
                        <div className="questionScene">
                          <p className="questionText">
                            {scenes[nextSceneCount].question}
                          </p>
                        </div>
                        <form id="submitform">
                          {scenes[nextSceneCount].options.map(
                            (element, index) => (
                              <div key={index} className="input_container">
                                <input type="radio" id={index} name="radio" />
                                <label
                                  onClick={() =>
                                    submitAnswer(
                                      element.goToQuestionSceneID,
                                      element.point
                                    )
                                  }
                                  className="correctanswer"
                                  htmlFor={index}
                                >
                                  {index + 1}. {element.option}
                                </label>
                              </div>
                            )
                          )}
                        </form>
                      </div>
                    </>
                  ) : (
                    <div>
                      {scenes[nextSceneCount]?.scene === "start" ? (
                        <>
                          <div
                            style={{
                              backgroundImage: `url(${process.env.PUBLIC_URL}${scenes[nextSceneCount].avatar})`,
                              backgroundSize: `${scenes[nextSceneCount].backgroundSize}px`,
                            }}
                            className="StartPosition"
                          ></div>
                          <h1 className="storyBasedtitle">
                            {scenes[nextSceneCount].text}
                          </h1>
                          <button className="start_btn" onClick={nextScene}>
                            Start!
                          </button>
                        </>
                      ) : (
                        <>
                          {scenes[nextSceneCount]?.scene === "time" ? (
                            <div className="timebox">
                              <div className="questionScene">
                                <p className="timetext">
                                  {scenes[nextSceneCount].text}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="customerSpeakbubble">
                                <p className="hisir">
                                  {scenes[nextSceneCount]?.text}
                                </p>
                              </div>

                              <div
                                style={{
                                  backgroundImage: `url(${process.env.PUBLIC_URL}${scenes[nextSceneCount]?.avatar})`,
                                  backgroundSize: `${scenes[nextSceneCount]?.backgroundSize}px`,
                                }}
                                className="customerPosition"
                              ></div>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};
export default StoryBased;
