import React, { useState, useEffect } from "react";
import avatar from '../../assets/avatar.png'
import exp_img from '../../assets/exp_img.png'
import talky_talky_startscreen from "../../assets/talky_talky_startscreen.png"
import start_model from '../../assets/start_model.png'
import third_scene_background from "../../assets/third_scene_backgorund.png"
import micperson from '../../assets/micperson.png';
import customer_third from "../../assets/customer_third.png";
import fifth_model from "../../assets/fifth_model.png";
import "./StoryBased.css";

let scenes = JSON.parse(localStorage.getItem("data"));
if (scenes !== null) {
  console.log("local storage");
} else {
  scenes = [
    {
      sceneID: 0,
      scene: "start",
      background: talky_talky_startscreen,
      question: "",
      avatar: start_model,
      text: "Talky-Talky",
      backgroundSize: "",
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 1,
      scene: "employee",
      background: talky_talky_startscreen,
      question: "",
      avatar: micperson,
      text: "Hi sir! How can I help you today?",
      backgroundSize: 963,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 2,
      scene: "customer",
      background: third_scene_background,
      question: "",
      avatar: customer_third,
      text: "I would like to move my reservations to a new date",
      backgroundSize: 1203,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 3,
      scene: "employee",
      background: talky_talky_startscreen,
      question: "",
      avatar: micperson,
      text: "The line is really long right now so it will take awhile",
      backgroundSize: 963,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 4,
      scene: "question",
      background: talky_talky_startscreen,
      question:
        "You know he will have to wait in a long line, what would you say to him?",
      backgroundSize: 963,
      option1: "Let him wait without saying anything",
      goToQuestionSceneIDOption1: 5,
      pointOption1: 0.5,
      option2:
        "Tell him that the line might be long, if its not urgent. He can try calling after 1 hour",
      goToQuestionSceneIDOption2: 6,
      pointOption2: 1,
      customeBackScene: null,
    },
    {
      sceneID: 5,
      scene: "customer",
      background: third_scene_background,
      question: "",
      avatar: customer_third,
      text: "Its more than 5 minutes. Let me call them again in an hour",
      backgroundSize: 1263,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: 4,
    },
    {
      sceneID: 6,
      scene: "customer",
      background: third_scene_background,
      question: "",
      avatar: fifth_model,
      text: "I have waited for so long! I need to call them again!",
      backgroundSize: 1263,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: 4,
    },
    {
      sceneID: 7,
      scene: "time",
      question: "",
      background: third_scene_background,
      text: "1 Hour Later",
      backgroundSize: 1263,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: 4,
    },
    {
      sceneID: 8,
      scene: "employee",
      background: talky_talky_startscreen,
      question: "",
      avatar: micperson,
      text: "Hello Sir! How can I help you?",
      backgroundSize: 963,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 9,
      scene: "customer",
      background: third_scene_background,
      question: "",
      avatar: customer_third,
      text: "Hi, I would like to request a change in my reservation's date",
      backgroundSize: 1203,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 10,
      scene: "customer",
      background: third_scene_background,
      question: "",
      avatar: customer_third,
      text: "If possible, can I move my reservation date to the 15th of Feb?",
      backgroundSize: 1203,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 11,
      scene: "employee",
      background: talky_talky_startscreen,
      question: "",
      avatar: micperson,
      text: "That is possible but there will be a fee for changing date of reservation",
      backgroundSize: 963,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 12,
      scene: "customer",
      background: third_scene_background,
      question: "",
      avatar: fifth_model,
      text: "What? I thought there were not fees for changing",
      backgroundSize: 1263,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 12,
      scene: "employee",
      background: talky_talky_startscreen,
      question: "",
      avatar: micperson,
      text: "I'm sorry but if you change 3 days prior, we will charge a fee sir.",
      backgroundSize: 963,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 13,
      scene: "question",
      background: talky_talky_startscreen,
      question:
        "The customer is complaining, what should you do in this situation?",
      option1:
        "Apologize and tell him that they will make it clear on the website in the future",
      goToQuestionSceneIDOption1: 5,
      pointOption1: 0.5,
      option2:
        "Apologize to him and suggest a new promotion that comes with the bookings",
      goToQuestionSceneIDOption2: 6,
      pointOption2: 1,
      backgroundSize: 963,
      customeBackScene: null,
    },
    {
      sceneID: 14,
      scene: "employee",
      background: talky_talky_startscreen,
      question: "",
      avatar: micperson,
      text: "We're really sorry about this, we will make it more clear on the website!",
      backgroundSize: 963,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 15,
      scene: "customer",
      background: third_scene_background,
      question: "",
      avatar: customer_third,
      text: "Okay! then can I change to 14th of Feb? That has no fees right?",
      backgroundSize: 1203,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 16,
      scene: "question",
      background: talky_talky_startscreen,
      question:
        "The customer is louder and has more energy, what would you do?",
      option1: "Stay Calm and control the tone",
      goToQuestionSceneIDOption1: 5,
      pointOption1: 0.5,
      option2: "Be adaptable and match the energy of the customer",
      goToQuestionSceneIDOption2: 6,
      pointOption2: 1,
      backgroundSize: 963,
      customeBackScene: null,
    },
    {
      sceneID: 17,
      scene: "employee",
      background: talky_talky_startscreen,
      question: "",
      avatar: micperson,
      text: "Yes, that would incur no extra fees. Would you like to proceed?",
      backgroundSize: 963,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 18,
      scene: "customer",
      background: third_scene_background,
      question: "",
      avatar: customer_third,
      text: "Yes, I would like to proceed with that option!",
      backgroundSize: 1203,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 19,
      scene: "employee",
      background: talky_talky_startscreen,
      question: "",
      avatar: micperson,
      text: "Okay, your reservations has been changed. ",
      backgroundSize: 963,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
    {
      sceneID: 20,
      scene: "question",
      background: talky_talky_startscreen,
      question: "The problem has been solve. What will you do next?",
      option1: "Ask if there is anything else he needs?",
      goToQuestionSceneIDOption1: 21,
      pointOption1: 1,
      option2:
        "Just tell him the change is done and say Thank you for using their service",
      goToQuestionSceneIDOption2: 21,
      pointOption2: 0.5,
      backgroundSize: 963,
      customeBackScene: null,
    },
    {
      sceneID: 21,
      scene: "customer",
      background: third_scene_background,
      question: "",
      avatar: customer_third,
      text: "That is it now, Thank you so much!",
      backgroundSize: 1203,
      option1: "",
      goToQuestionSceneIDOption1: null,
      pointOption1: null,
      option2: "",
      goToQuestionSceneIDOption2: null,
      pointOption2: null,
      customeBackScene: null,
    },
  ];
  console.log("not local storage");
}

const StoryBased = () => {
  const [progressCount, setProgressCount] = useState(0);
  const [nextSceneCount, setNextSceneCount] = useState(0);
  const [start, setStart] = useState(true);
  const [next, setNext] = useState(false);
  const [buttonColor, setButtonColor] = useState("");

  console.log(scenes[nextSceneCount]);

  // Increase Progress bar
  useEffect(() => {
    const bar = document.getElementById("bar");
    bar.style.width = progressCount * 12.5 + "%";
  }, [nextSceneCount]);

  const nextScene = () => {
    if (nextSceneCount === scenes.length - 1) {
      return nextSceneCount;
    } else {
      setNextSceneCount(nextSceneCount + 1);
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
    setTimeout(() => {
      setNextSceneCount(goToQuestionSceneID);
      setProgressCount((point) => (point += reward));
    }, 1000);
  };

  const checkAnswerBackgorundColor = (each) => {
    if (scenes[nextSceneCount].answer === each.option) {
      setButtonColor("green");
    } else {
      setButtonColor("red");
    }
  };

  let isLast = nextSceneCount == scenes.length - 1;

  return (
    <div className="wrapper">
      <div
        style={{
          backgroundImage: `url(${scenes[nextSceneCount]?.background})`,
        }}
        className="Scontainer"
      >
        {/* Button  */}
        {start ? (
          <button className="start_btn" onClick={nextScene}>
            {isLast ? "Done!" : start ? "Start!" : "Next!"}
          </button>
        ) : (
          <button className="next_btn" onClick={nextScene}></button>
        )}

        {isLast || (!start && scenes[nextSceneCount]?.scene !== "start") ? (
          <button
            className="back_btn"
            onClick={() => backScene(scenes[nextSceneCount])}
          ></button>
        ) : null}
        {start ? <h1 className="storyBasedtitle">{scenes[nextSceneCount].text}</h1> : null}

        {/* Process bar */}
        <div className="progress_wrapper">
          <div className="info">
            <div className="name_container">
              <p className="rank">A</p>
              <p className="name">5 ATHENA</p>
            </div>
            <div className="avatar">
              <img
                src={avatar}
                alt="avatar"
                className="avatar_img"
              />
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

        {start ? (
          <div
            style={{
              backgroundImage: `url(${scenes[nextSceneCount].avatar})`,
              backgroundSize: `${scenes[nextSceneCount].backgroundSize}px`,
            }}
            className="StartPosition"
          ></div>
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
                        <div className="input_container">
                          <input type="radio" id="1" name="radio" />
                          <label
                            onClick={() =>
                              submitAnswer(
                                scenes[nextSceneCount]
                                  .goToQuestionSceneIDOption1,
                                scenes[nextSceneCount].pointOption1
                              )
                            }
                            className="correctanswer"
                            htmlFor="1"
                          >
                            1. {scenes[nextSceneCount].option1}
                          </label>
                        </div>
                        <div className="input_container">
                          <input type="radio" id="2" name="radio" />
                          <label
                            onClick={() =>
                              submitAnswer(
                                scenes[nextSceneCount]
                                  .goToQuestionSceneIDOption2,
                                scenes[nextSceneCount].pointOption2
                              )
                            }
                            className="correctanswer"
                            htmlFor="2"
                          >
                            2. {scenes[nextSceneCount].option2}
                          </label>
                        </div>
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
    </div>
  );
};
export default StoryBased;
