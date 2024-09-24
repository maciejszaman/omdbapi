import "./App.css";
import { View } from "./components/View/View";
import { Divider, Paper } from "@mui/material";
import { Navbar } from "./components/Navbar/Navbar";
import { useMovies } from "./shared/hooks/MovieCard.hook";

function App() {
  const { moviesData, setMoviesData } = useMovies();

  return (
    <div className="App">
      <Paper
        sx={{
          maxWidth: "900px",
          height: "100%",
          margin: "0 auto",
        }}
      >
        <Navbar setMoviesData={setMoviesData} />
        <Divider />
        {moviesData && <View moviesData={moviesData} />}
      </Paper>
    </div>
  );
}

export default App;
