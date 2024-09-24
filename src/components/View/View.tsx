import React from "react";
import * as Types from "./View.types";
import { Box, Container, Grow, Typography } from "@mui/material";
import { MovieCard } from "../MovieCard/MovieCard";
import ErrorIcon from "@mui/icons-material/Error";

export const View = ({ moviesData }: Types.ViewProps) => {
  console.log(moviesData);
  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        padding: "10px",
        gap: "10px",
        justifyItems: "center",
      }}
    >
      {moviesData.Search ? (
        moviesData.Search.map((movie, index) => <MovieCard props={movie} />)
      ) : (
        <Grow in={true} timeout={1000}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              padding: "10px",
            }}
          >
            <ErrorIcon />
            <Typography>No movies found</Typography>
          </Box>
        </Grow>
      )}
    </Container>
  );
};
