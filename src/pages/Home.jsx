import React, { useEffect, useState } from "react";
import { Stack, Grid, Divider } from "@mui/material";
import { getMoviePopular, getMovieTopRated } from "../api/Api";
import MovieCard from "../components/Card";
import CategoryTitle from "../components/CategoryTitle";

const Home = () => {
  const [moviePopular, setMoviePopular] = useState([]);
  const [movieTopRated, setMovieTopRated] = useState([]);

  useEffect(() => {
    getMoviePopular().then((data) => setMoviePopular(data));
    getMovieTopRated().then((data) => setMovieTopRated(data));
  }, []);

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
