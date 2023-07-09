import React, { useEffect, useState } from "react";
import { Stack, Grid, Divider } from "@mui/material";
import {
  getMoviePopular,
  getMovieTopRated,
  getMovieNowPlaying,
} from "../api/Api";
import MovieCard from "../components/Card";
import CategoryTitle from "../components/CategoryTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [movieNowPlaying, setMovieNowPlaying] = useState([]);
  const [moviePopular, setMoviePopular] = useState([]);
  const [movieTopRated, setMovieTopRated] = useState([]);

  useEffect(() => {
    getMovieNowPlaying().then((data) => setMovieNowPlaying(data));
    getMoviePopular().then((data) => setMoviePopular(data));
    getMovieTopRated().then((data) => setMovieTopRated(data));
  }, []);

  const NowPlayingMovies = ({ limit }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <Slider {...settings}>
        {movieNowPlaying.map((image) => (
          <div key={image.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${image.poster_path}`}
              alt={image.title}
              style={{ height: 500, width: "100vw", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    );
  };

  const PopularMovies = ({ limit }) => {
    const limitedMovies = moviePopular.slice(0, limit);

    return limitedMovies.map((movie) => {
      const releaseYear = new Date(movie.release_date).getFullYear();

      return (
        <MovieCard
          key={movie.id}
          title={movie.title}
          date={releaseYear.toString()}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      );
    });
  };

  const TopRatedMovies = ({ limit }) => {
    const limitedMovies = movieTopRated.slice(0, limit);

    return limitedMovies.map((movie) => {
      const releaseYear = new Date(movie.release_date).getFullYear();

      return (
        <MovieCard
          key={movie.id}
          title={movie.title}
          date={releaseYear.toString()}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      );
    });
  };

  return (
    <Stack direction="column" justifyContent="center" gap={1} sx={{ px: 52 }}>
      <NowPlayingMovies />
      <CategoryTitle title="POPULAR MOVIES" />
      <Grid
        container
        direction="row"
        gap={1}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <PopularMovies limit={16} />
      </Grid>
      <Divider
        variant="middle"
        sx={{ backgroundColor: "white", my: 4, opacity: "25%" }}
      />
      <CategoryTitle title="TOP RATED MOVIES" />
      <Grid
        container
        direction="row"
        gap={1}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <TopRatedMovies limit={16} />
      </Grid>
    </Stack>
  );
};

export default Home;
