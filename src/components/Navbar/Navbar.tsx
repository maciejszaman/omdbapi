import {
  Button,
  Container,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import * as Types from "./Navbar.types";
import { useMovies } from "../../shared/hooks/MovieCard.hook";

export const Navbar = ({ setMoviesData }: Types.NavbarProps) => {
  const [search, setSearch] = useState<string>("Batman");
  const [type, setType] = useState<string>("movie");
  const { fetchMovies } = useMovies();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    setType(e.target.value);
  };

  const handleSubmit = async () => {
    const data = await fetchMovies(search, type);
    setMoviesData(data);
  };

  return (
    <Container sx={{ display: "flex", padding: "10px", gap: "10px" }}>
      <TextField
        value={search}
        label={"Movie title"}
        onChange={handleInputChange}
        placeholder="Movie title"
      />
      <Select label={"Movie type"} value={type} onChange={handleSelectChange}>
        <MenuItem value={"movie"}>Movie</MenuItem>
        <MenuItem value={"series"}>Series</MenuItem>
        <MenuItem value={"episode"}>Episode</MenuItem>
      </Select>
      <Button variant="outlined" onClick={handleSubmit}>
        Search
      </Button>
    </Container>
  );
};
