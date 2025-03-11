import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import ExerciseCard from "../components/ExerciseCard";

function Home() {
  const [bodyParts, setBodyParts] = useState([]);
  const [popularExercises, setPopularExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        headers: {
          "X-RapidAPI-Key": "6beb41637bmsha87b9b11f2fceebp1efdeejsn4de831e59759", // Your key
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setBodyParts(response.data);

        const exerciseOptions = {
          method: "GET",
          url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
          params: { limit: "3" },
          headers: {
            "X-RapidAPI-Key": "your-actual-api-key-here", // Your key
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        };
        const exerciseResponse = await axios.request(exerciseOptions);
        setPopularExercises(exerciseResponse.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Hero />
      <div className="container my-5">
        <h2>Explore Categories</h2>
        <div className="row">
          {bodyParts.map((part, index) => (
            <div key={index} className="col-md-4 mb-3">
              <a href={`/exercises/${part}`} className="btn btn-outline-primary w-100">
                {part.charAt(0).toUpperCase() + part.slice(1)}
              </a>
            </div>
          ))}
        </div>

        <h2>Popular Exercises</h2>
        <div className="row">
          {popularExercises.map((exercise) => (
            <div key={exercise.id} className="col-md-4">
              <ExerciseCard exercise={exercise} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;