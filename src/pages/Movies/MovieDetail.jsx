import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const MoviesDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=83bf4c4ed5fcffe946729d0a15c01d3b`
      )
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <div className=" d-flex   justify-content-center align-items-center pt-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
          />
          <Card.Body>
            <Card.Text>{movies.original_title}</Card.Text>
            <Card.Text>{movies.overview}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default MoviesDetails;
