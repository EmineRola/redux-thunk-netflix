import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchByUrl } from "../app/actions/movieActions";
import { baseImgUrl } from "../components/Hero";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDettail, setmovieDetail] = useState(null);
  console.log(movieDettail);
  useEffect(() => {
    //filmin detay veerisini çek
    //options lazım olduğuiçin  daha önce fetchByUrl fonksiyonu yazıldı
    fetchByUrl(`/movie/${movieId}`).then((res) => setmovieDetail(res));
  }, []);
  if (movieDettail === null) return "Loading...";
  return (
    <div className="movie_detail row bg-black text-light">
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img
          className="img-fluid detail-img"
          src={`${baseImgUrl}${movieDettail.backdrop_path}`}
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h1>{movieDettail.title}</h1>
        <p> {movieDettail.overview}</p>
        <div className="row row-cols-2">
          <div>
            <p>Maliyet: {movieDettail.budget}</p>
            <p>Kazanç: {movieDettail.revenue}</p>
            <p>Kar: {movieDettail.revenue - movieDettail.budget}</p>
          </div>
          <div>
            <div className="d-flex gap-2">
              {/* //kategori(ler) */}
              {movieDettail.genres.map((genre) => (
                <p className="badge bg-secondary">{genre.name}</p>
              ))}
            </div>
            <div className="d-flex gap-2">
              Dil(ler):
              {movieDettail.spoken_languages.map((lang) => (
                <p className="badge bg-danger">{lang.name}</p>
              ))}
            </div>
            <div className="row gap-2">
              Yapımcı(lar):
              {movieDettail.production_companies.map((comp) => (
                <p className="badge bg-warning">{comp.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
