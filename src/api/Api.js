const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "ab928dff2a30e6644d3b02d58a3784cc";

export const getMovieNowPlaying = async () => {
  const response = await fetch(`${baseUrl}movie/now_playing?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
};

export const getMoviePopular = async () => {
  const response = await fetch(`${baseUrl}movie/popular?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
};

export const getMovieTopRated = async () => {
  const response = await fetch(`${baseUrl}movie/top_rated?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
};