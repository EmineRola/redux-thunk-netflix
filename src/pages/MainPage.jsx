import { useDispatch, useSelector } from "react-redux";
import { getMovies, getGenres } from "../app/actions/movieActions";
import { useEffect } from "react";
import Hero from "../components/Hero";
import ListMovies from "../components/ListMovies";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);
  // console.log(state);
  useEffect(() => {
    //popüler filmleri çek ve aksiyona aktar
    dispatch(getMovies());
    dispatch(getGenres());

    //kategori verisini çekip store aktaracak
  }, []);
  return (
    <div>
      {/*popüler filmi gösterme */}
      <Hero />

      {/* kategorilere göre filmleri listeleme */}
      {state.genres.map((genre) => (
        <ListMovies key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
