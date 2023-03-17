import React, { useState, useEffect } from "react";
import avatar from "../../assets/avatar.png";
import exp_img from "../../assets/exp_img.png";
import talky_talky_startscreen from "../../assets/talky_talky_startscreen.png";
import start_model from "../../assets/start_model.png";
import third_scene_background from "../../assets/third_scene_backgorund.png";
import micperson from "../../assets/micperson.png";
import customer_third from "../../assets/customer_third.png";
import fifth_model from "../../assets/fifth_model.png";
import "./StoryBased.css";
import treasure_chest from "../../assets/treasure_chest.png";
import { useNavigate } from "react-router-dom";
import getSheetData from "../../api/StoryBasedData";

const StoryBased = () => {
  const [progressCount, setProgressCount] = useState(0);
  const [nextSceneCount, setNextSceneCount] = useState(0);
  const [start, setStart] = useState(true);
  const [next, setNext] = useState(false);
  const [buttonColor, setButtonColor] = useState("");
  const [score, setScore] = useState(0);
  const [endScore, setEndScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(true);
  const [click, setClick] = useState(false);
  const [blockNextScene, setBlockNextScene] = useState(false);

  const [scenes, setScenes] = useState([]);
  const navigation = useNavigate();
  console.log("Before useEffect...")
  

  useEffect(() => {
    const fetchData = async () => {
      return await getSheetData();
    };
    fetchData().then((data) => {
      setScenes(data);
      // setScenes(scenes => [...scenes, data]);
      console.log("finish fetch")
      console.table(scenes)});
    // fetchUsers().then((users) => setUsers(users));
  }, []);

 

  // Increase Progress bar
  useEffect(() => {
    if (typeof scenes === 'undefined') return
    if (scenes.length === 0) return
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
      console.log("Question scene");
      if (click === true) {
        setBlockNextScene((blockNextScene) => (blockNextScene = false));
      } else {
        setBlockNextScene((blockNextScene) => (blockNextScene = true));
      }
    }
  }, [nextSceneCount]);

  const nextScene = () => {
    if (nextSceneCount === scenes.length - 1) {
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
      setNextSceneCount(goToQuestionSceneID);
      setProgressCount((point) => (point += reward));
      if (reward === 0.5) {
        setScore((score) => (score += 5));
      } else if (reward === 1) {
        setScore((score) => (score += 10));
      }
    }, 1000);
  };
  // if (!(typeof scenes === 'undefined')) {
  //   if (scenes.length == 0) {
  //     console.log("HERE111")
  //     return (<div>loading</div>)
  //   }
  // }

  function ScenesCheck() {
    if (typeof scenes === 'undefined') return
    if (scenes.length === 0) return
    return true
  }
  let isLast = nextSceneCount == (scenes?.length - 1) ?? 0;
  // console.log(gameOver, blockNextScene);
  return (
      <div className="wrapper">
      {(ScenesCheck()) ? (
      <div
      style={{
        backgroundImage: `url(${require(`../../assets/talky_talky_startscreen.png`)})`,
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
          {isLast ? "Done!" : start ? "Start!" : "Next!"}
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
            <p className="rank">A</p>
            <p className="name">5 ATHENA</p>
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
                You have earn <span>1 Token</span> and <span>{score} XP</span>{" "}
                today.
              </p>
            </div>
            <div className="btn_gp">
              <button
                className="go_to_home"
                onClick={() => {
                  setGameOver(!gameOver);
                  navigation("/dashboard");
                }}
              >
                Go to Home
              </button>
              <button
                className="claim_reward"
                onClick={() => {
                  setGameOver(!gameOver);
                  navigation("/dashboard");
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
        {/* <img src={process.env.PUBLIC_URL + "/static/media/assets/talky_talky_startscreen.png"}/> */}
        
        {/* <img src={require(`../../assets/talky_talky_startscreen.png`)}/> */}
        <div
          style={{
            backgroundImage: `url()`,
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
                  backgroundImage: `url(${scenes[nextSceneCount].avatar})`,
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
                        backgroundImage: `url(${scenes[nextSceneCount].avatar})`,
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
                      {scenes.option.map((element, index) => (
                        <div key={index} className="input_container">
                          <input type="radio" id={index} name="radio" />
                          <label
                            onClick={() =>
                              submitAnswer(
                                scenes[nextSceneCount]
                                  .goToQuestionSceneIDOption1,
                                scenes[nextSceneCount].pointOption1
                              )
                            }
                            className="correctanswer"
                            htmlFor={index}
                          >
                            {index + 1}. {element.option}
                          </label>
                        </div>
                      ))}
                    </form>
                  </div>
                </>
              ) : (
                <div>
                  {scenes[nextSceneCount]?.scene === "start" ? (
                    <>
                      <div
                        style={{
                          backgroundImage: `url(${scenes[nextSceneCount].avatar})`,
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
                              backgroundImage: `url(${scenes[nextSceneCount]?.avatar})`,
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
      ):(<div>loading</div>)}
    </div>
  );
};
export default StoryBased;
