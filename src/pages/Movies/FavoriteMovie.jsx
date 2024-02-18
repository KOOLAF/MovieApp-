import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MdDelete } from "react-icons/md";
import { removeFromFavorite } from "../../Store/slices/favorits";
const FavoriteMovie = () => {
  const favorites = useSelector((state) => state.Favorites.movie);
  const dispatch = useDispatch();
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center  bg-dark gap-5 flex-wrap">
        <Row xs={1} md={3} className="">
          {favorites.map((mo) => (
            <Col key={mo.id}>
              <Card className=" bg-dark text-white">
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${mo.backdrop_path}`}
                />
                <Card.Body>
                  <Card.Title>{mo.original_title}</Card.Title>
                  <Card.Text>{mo.overview}</Card.Text>
                </Card.Body>
                <button
                  className=" btn btn-danger"
                  onClick={() => {
                    dispatch(removeFromFavorite(mo.id,mo));
                    console.log(favorites);
                  }}>
                  <MdDelete />
                </button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default FavoriteMovie;
