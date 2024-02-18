import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import AxiosIn from "../../axiosconfig/instance";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToFavorit } from "../../Store/slices/favorits";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const favoritesMovies = useSelector((state) => state.Favorites.movie);

  const [isFaHeart, setIsFaHeart] = useState(true);

  const dispatch = useDispatch();
  const Nvigate = useNavigate();
  useEffect(() => {
    axios;
    AxiosIn.get(
      `movie/popular?api_key=83bf4c4ed5fcffe946729d0a15c01d3b&page=${page}`
    )
      .then((res) => {
        console.log(res);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(favoritesMovies);
  }, [page, favoritesMovies]);
  const incresePage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const decresePage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <div className=" d-flex justify-content-center align-items-center  bg-dark gap-5 flex-wrap">
        <Row xs={1} md={3} className="">
          {movies.map((mo) => (
            <Col key={mo.id}>
              <Card className=" bg-dark text-white">
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${mo.backdrop_path}`}
                />
                <Card.Body>
                  <Card.Title>{mo.original_title}</Card.Title>
                  <Card.Text>{mo.overview}</Card.Text>
                  <div>
                    <button
                      onClick={() => {
                        Nvigate(`/movieD/${mo.id}`);
                      }}
                      className=" btn btn-danger">
                      Details
                    </button>
                    <div
                      onClick={() => {
                        dispatch(addToFavorit(mo));
                        setIsFaHeart((IsFaHeart) => !IsFaHeart);
                      }}>
                      {isFaHeart ? <CiHeart /> : <FaHeart />}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <button className=" btn btn-dark" onClick={decresePage}>
          prev
        </button>
        <button className=" btn btn-dark" onClick={incresePage}>
          Next
        </button>
      </div>
    </>
  );
};
export default Movies;
