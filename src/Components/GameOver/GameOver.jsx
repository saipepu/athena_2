import React from "react";
import "./GameOver.css";
import treasure_chest from "../../assets/treasure_chest.png";
import { useNavigate } from "react-router-dom";

const GameOver = ({ setGameOver, gameOver, win }) => {

  const navigation = useNavigate();

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
              onClick={() => setGameOver(!gameOver)}
            >
              Claim Reward
            </button>
          ) : (
            <button
              className="go_to_home"
              onClick={() => {
                setGameOver(!gameOver)
                navigation('/dashboard')
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
