import React, { useCallback, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);

  const param = useParams();
  const { id } = param;

  const movieData = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=673ca1d20606d9f382b6c7c2c3f49b66&language=ar`
    );
    const data = await response.json();
    setMovie(data);
  }, [id]);
  useEffect(() => {
    movieData();
  }, [movieData]);
  return (
    <div>
      <Row className="justify-content-center">
        <Col xs="12" className="my-3 ">
          <div className="card-detalis  d-flex align-items-center ">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="ascad"
            />
            <div className="justify-content-center text-center  mx-auto">
              <p className="card-text-details ">
                اسم الفيلم:{movie.original_title}
              </p>
              <p className="card-text-details ">
                تاريخ الفيلم :{movie.release_date}
              </p>
              <p className="card-text-details ">
                عدد المقيمين :{movie.vote_count}
              </p>
              <p className="card-text-details ">
                التقييم :{movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs="12">
          <div className="card-story p-4  d-flex flex-column align-items-start">
            <div className="text-end ">
              <p className="card-text-title">القصة:</p>
            </div>
            <div className="text-end">
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center  mt-3">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center "
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              عوده للرئيسيه
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              مشاهده الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetail;
