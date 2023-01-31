import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import MovieList from "./component/MovieList";
import NavBar from "./component/NavBar";
// import { allMoviesActions } from "./store/store";

function App() {
  return (
    <div className="font color-body">
      <NavBar></NavBar>
      <Container>
        <Routes>
          <Route path="/" element={<MovieList></MovieList>}></Route>
          <Route
            path="/movie/:id"
            element={<MovieDetail></MovieDetail>}
          ></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
