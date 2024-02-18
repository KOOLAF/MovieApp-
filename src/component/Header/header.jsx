import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Head = () => {
  const fav = useSelector((state) => state.Favorites.movie);
  return (
    <>
      <Navbar expand="lg" className=" bg-dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div>
              <Nav>
                <div className=" d-flex gap-4 justify-content-between align-content-between ">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className="hover-overlay text-danger"
                    to={"/movie"}>
                    Movies
                  </NavLink>
                  <NavLink
                    className="hover-overlay text-danger"
                    style={{ textDecoration: "none" }}
                    to={"/Fav"}>
                    FavoriteMovie
                  </NavLink>
                  <NavLink
                    className="hover-overlay text-danger"
                    style={{ textDecoration: "none" }}
                    to={"/login"}>
                    login
                  </NavLink>
                  <NavLink
                    className="hover-overlay text-danger"
                    style={{ textDecoration: "none" }}
                    to={"/reg"}>
                    register
                  </NavLink>
                  <h2 className=" text-danger">You like :{fav.length}</h2>
                </div>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Head;
