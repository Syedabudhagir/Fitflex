import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ExerciseDetail() {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    const fetchExercise = async () => {
      const options = {
        method: "GET",
        url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        headers: {
          "X-RapidAPI-Key": "6beb41637bmsha87b9b11f2fceebp1efdeejsn4de831e59759", // Replace with your RapidAPI key
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setExercise(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExercise();
  }, [id]);

  if (!exercise) return <div className="container my-5">Loading...</div>;

  return (
    <div className="container my-5">
      <h2>{exercise.name}</h2>
      <p><strong>Target:</strong> {exercise.target}</p>
      <p><strong>Equipment:</strong> {exercise.equipment}</p>
      <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
      <p><strong>Instructions:</strong> {exercise.instructions.join(" ")}</p>
      {exercise.gifUrl && (
        <img src={exercise.gifUrl} alt={exercise.name} className="img-fluid" />
      )}
    </div>
  );
}

export default ExerciseDetail;