import React from "react";
import { Link } from "react-router-dom";

function ExerciseCard({ exercise }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{exercise.name}</h5>
        <p className="card-text">Target: <span style={{ color: "#f4a261" }}>{exercise.target}</span></p>
        <Link to={`/exercise/${exercise.id}`} className="btn btn-primary">
          Explore
        </Link>
      </div>
    </div>
  );
}

export default ExerciseCard;