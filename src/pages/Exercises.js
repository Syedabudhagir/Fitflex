import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ExerciseCard from "../components/ExerciseCard";

function Exercises() {
  const { category } = useParams();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const options = {
        method: "GET",
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${category}`,
        params: { limit: "10" },
        headers: {
          "X-RapidAPI-Key": "6beb41637bmsha87b9b11f2fceebp1efdeejsn4de831e59759", // Replace with your RapidAPI key
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setExercises(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExercises();
  }, [category]);

  return (
    <div className="container my-5">
      <h2>{category} Exercises</h2>
      <div className="row">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="col-md-4">
            <ExerciseCard exercise={exercise} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercises;