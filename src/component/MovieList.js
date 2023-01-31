import React, { useEffect, useState } from "react";
import { fetchAllMovies } from "../store/Actions/fetchAllMovies";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Paginatepages from "../Paginatepages";
import { useDispatch, useSelector } from "react-redux";
const MovieList = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);
  const fetchedMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(fetchedMovies);
  }, [fetchedMovies]);
  return (
    <React.Fragment>
      <Row className="mt-3">
        {movies.length >= 1 ? (
          movies.map((mov) => <CardMovie key={mov.id} mov={mov} />)
        ) : (
          <h1 className="text-center p-5">لا يوجد افلام</h1>
        )}
      </Row>

      {movies.length >= 1 ? <Paginatepages></Paginatepages> : null}
    </React.Fragment>
  );
};
export default MovieList;
