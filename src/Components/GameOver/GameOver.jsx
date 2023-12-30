import React, { useEffect, useState } from "react";
import "./GameOver.css";
import treasure_chest from "../../assets/treasure_chest.png";
import { useNavigate } from "react-router-dom";
import { updateEmployee } from "../../api/server_routes";

const GameOver = ({
  setGameOver,
  gameOver,
  win,
  role,
  id,
  employee,
  course_id,
  employeeScore,
  numberOfQ
}) => {
  const navigation = useNavigate();
  const [response, setResponse] = useState();

  let setMiliToMinute = 0;
  
  function miliToMinute(mili) {
    return (mili / (1000 * 60)) % 60;
  }

  const updateEmployeeScore = (action) => {
    if(action !== "play again") {
      const startTime = localStorage.getItem("startTime"); // start counting the time so that HR can know how much time each employee span of the quiz
      const endTime = new Date().getTime();
      const elapsedTime = endTime - startTime;
      
      setMiliToMinute = miliToMinute(elapsedTime); // converting mili sec to minute
    }

    employee.hr_of_training = parseInt(
      employee?.hr_of_training + setMiliToMinute
    );
    employee.ATH = employee?.ATH + 1; // add 1 token for each game
    let exp = 0;
    if(employeeScore < numberOfQ/2) { // grading the exp point based on the score
      exp = 5;
    } else if(employeeScore === numberOfQ) {
      exp = 15;
    } else {
      exp = 10;
    }

    employee.exp = employee?.exp + exp;

    for (let x in employee?.inProgress) {
      // eslint-disable-next-line eqeqeq
      if (course_id == employee?.inProgress[x].course_id) {
        employee.inProgress[x].quiz = true;
      }
    }
    updateEmployee(role, id, employee, setResponse);
  };

  useEffect(() => {
    if (response?.updateSuccess) {
      setGameOver(!gameOver);
      navigation(`/dashboard/${role}/${id}`); // after successfully updating the employee data, redirect the user to the dashboard
    }
  }, [response, navigation, id, role, gameOver, setGameOver]);

  return (
    <div className="model_wrapper">
      <div className="gameOver">
        <div className="media_container">
          <img src={treasure_chest} alt="treasure_chest" className="media" />
        </div>
        <div className="content">
          {win ? (
            <p className="title">
              You have earn <span>1 Token</span> and <span>{employeeScore < numberOfQ/2 ? '5' : employeeScore === numberOfQ ? '15' : '10'} Exp</span> today.
            </p>
          ) : (
            <p className="title">Oh no! You are drowned!</p>
          )}
          {win ? (
            <p className="subtitle">Challenge Completed!</p>
          ) : (
            <p className="subtitle">Challenge Failed Successfully!</p>
          )}
        </div>
        <div className="btn_gp">
          {win ? (
            <button
              className="claim_reward"
              onClick={() => {
                updateEmployeeScore();
              }}
            >
              Claim Reward
            </button>
          ) : (
            <button
              className="go_to_home"
              onClick={() => {
                updateEmployeeScore();
                setGameOver(!gameOver);
                navigation(`/dashboard/${role}/${id}`);
              }}
            >
              Go to Home
            </button>
          )}
          <button className="play_again" onClick={() => {
            updateEmployeeScore("play again");
            setGameOver(!gameOver)
          }}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
