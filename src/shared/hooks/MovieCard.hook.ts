import { useState, useEffect } from "react";
import * as SharedTypes from "../types/SharedTypes";

export const useMovies = () => {
  const [moviesData, setMoviesData] = useState<SharedTypes.MoviesResponse>();

  const fetchMovies = async (search: string, type: string) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${search}&type=${type}&apikey=1d7e2ef0`
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    let ignore = false;

    (async () => {
      const data = await fetchMovies("Batman", "movie");
      if (!ignore) {
        setMoviesData(data);
      }
    })();

    return () => {
      ignore = true;
    };
  }, []);

  return {
    moviesData,
    fetchMovies,
    setMoviesData,
  };
};
