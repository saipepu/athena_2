import React, { useEffect, useState } from "react";
import "./GameOver.css";
import treasure_chest from "../../assets/treasure_chest.png";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/server_api";
import { fetchOneEmployee, updateEmployee } from "../../api/server_routes";

const GameOver = ({ setGameOver, gameOver, win, role, id }) => {

  console.log(role, id);
  const navigation = useNavigate();
  const [employee, setEmployee] = useState();
  const [response, setResponse] = useState();

  useEffect(() => {
    fetchOneEmployee(role, id, setEmployee);
  }, [role, id])
  console.log(employee);

  const updateEmployeeScore = async () => {
    const toUpdate = {};
    toUpdate.ATH = employee?.ATH + 1;
    toUpdate.exp = employee?.exp + 10;
    updateEmployee(role, id, toUpdate, setResponse);
  }

  useEffect(() => {
    if(response?.updateSuccess) {
      setGameOver(!gameOver)
      navigation(`/dashboard/${role}/${id}`)
    } else {
      console.log('Error Updating Employee Data . . .')
    }
  }, [response, navigation, id , role, gameOver, setGameOver])

  return (
    <div className="model_wrapper">
      <div className="gameOver">
        <div className="media_container">
          <img src={treasure_chest} alt="treasure_chest" className="media" />
        </div>
        <div className="content">
          {win ? (
            <p className="title">
              You have earn <span>1 Token</span> and <span>10 XP</span> today.
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
                setGameOver(!gameOver)
                navigation(`/dashboard/${role}/${id}`)
              }}
            >
              Go to Home
            </button>
          )}
          <button className="play_again" onClick={() => setGameOver(!gameOver)}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
