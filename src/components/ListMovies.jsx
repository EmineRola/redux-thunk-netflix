import React from "react";
import { useEffect, useState } from "react";
import { fetchByUrl } from "../app/actions/movieActions";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { baseImgUrl } from "./Hero";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const ListMovies = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchByUrl(`/discover/movie?with_genres=${genre.id}`).then((res) =>
      //gelen filmleri state aktarma kısmı
      setMovies(res.results)
    );
  }, []);

  return (
    <div className="bg-dark text-light p-4">
      <h1>{genre.name}</h1>
      <Splide options={{ autoWidth: true, pagination: false, gap: 10 }}>
        {movies.map((film) => (
          <SplideSlide>
            <Link to={`/movie/${film.id}`}>
              <img className="film" src={`${baseImgUrl}${film.poster_path}`} />{" "}
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ListMovies;
