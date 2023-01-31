import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { fetchSearchMovies } from "../store/Actions/fetchSearchMovies";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const searchHandler = (word) => {
    dispatch(fetchSearchMovies(word));
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <Link to="/">
              <img className="logo" src={logo} alt="dfs" />
            </Link>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input
                onChange={(e) => searchHandler(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default NavBar;