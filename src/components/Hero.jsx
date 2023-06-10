import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
export const baseImgUrl = " https://image.tmdb.org/t/p/original";
const Hero = () => {
  const state = useSelector((store) => store.movieReducer);
  //rastgele bir satı bulma
  const index = Math.round(Math.random() * 19);
  //20 filmden rastgele bir tanesini çekme
  const film = state.populerFilms[index];

  if (!film) return "LOADİNG...";
  return (
    <div className="row bg-dark text-light p-4">
      <div className="col-md-6 mb-3 d-flex  flex-column justify-content-center gap-3">
        <h1>{film?.title}</h1>
        <p>{film?.overview}</p>
        <p className="text-warning">IMDB:{film?.vote_average}</p>
        <div className="d-flex justify-content-center gap-3">
          <Link className="btn btn-danger" to={`/movie/${film.id}`}>
            Filmi izle
          </Link>

          <button className="btn btn-info">Listeye Ekle </button>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center">
        <img
          className="img-fluid rounded shadow"
          src={`${baseImgUrl}${film?.backdrop_path}`}
        />
      </div>
    </div>
  );
};

export default Hero;
