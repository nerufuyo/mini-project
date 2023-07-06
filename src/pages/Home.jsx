import React, { useEffect, useState } from "react";
import { Typography, Box, Stack } from "@mui/material";
import { getMoviePopular } from "../api/Api";
import MovieCard from "../components/Card";

const Home = () => {
  const [moviePopular, setMoviePopular] = useState([]);

  useEffect(() => {
    getMoviePopular().then((data) => setMoviePopular(data));
  }, []);

  const PopularMovies = () => {
    return moviePopular.map((movie) => {
      return (
        <MovieCard
          key={movie.id}
          title={movie.title}
          description={movie.overview}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      );
    });
  };

  return (
    <Box sx={{ px: 40 }}>
      <Typography variant="h5">Popular Movies</Typography>
      <Stack direction="row" spacing={2}>
        <PopularMovies />
      </Stack>
      <Typography variant="h5">Now Playing</Typography>
    </Box>
  );
};

export default Home;
