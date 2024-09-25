import React, { useState } from "react";
import * as Types from "./MovieCard.types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import GradeIcon from "@mui/icons-material/Grade";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Tooltip,
  CardActionArea,
  Box,
  Skeleton,
  Divider,
} from "@mui/material";

export const MovieCard = ({ props }: Types.MovieCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState<Types.MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchMovieDetails = async () => {
    setLoading(true);
    const response = await fetch(
      `https://www.omdbapi.com/?i=${props.imdbID}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setLoading(false);
    setDetails(data);
  };

  const handleShowDetails = async () => {
    setShowDetails((prev) => !prev);
    await fetchMovieDetails();
  };

  const getAuthorAndType = () => {
    if (!details) return "";

    let author = details.Director !== "N/A" ? details.Director : details.Writer;
    if (author === "N/A") return "";

    return `${author}'s ${props.Type}`;
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: "280px",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <CardActionArea onClick={handleShowDetails}>
        <CardContent sx={{ padding: "16px", flexGrow: 1 }}>
          <Tooltip title={props.Title}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {props.Title}
            </Typography>
          </Tooltip>
          <Typography variant="body2" color="textSecondary">
            {props.Year}
          </Typography>
        </CardContent>
        <Divider />
        {!showDetails ? (
          <CardMedia
            component="img"
            image={props.Poster}
            alt={props.Title}
            sx={{ height: "300px", objectFit: "cover" }}
          />
        ) : (
          <Box
            sx={{
              height: "268px",
              padding: "16px",
              backgroundColor: "#f5f5f5",
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
              gap: 1,
            }}
          >
            {loading ? (
              <Skeleton variant="rectangular" height="100%" />
            ) : (
              <>
                <Typography variant="h6">{getAuthorAndType()}</Typography>
                <span style={{ display: "flex", gap: 4 }}>
                  <LocationOnIcon />
                  <Typography>{details?.Country}</Typography>
                </span>
                <span style={{ display: "flex", gap: 4 }}>
                  <WatchLaterIcon />
                  <Typography>{details?.Runtime}</Typography>
                </span>
                <Box sx={{ flexGrow: 1 }} />
                <span style={{ display: "flex", gap: 4 }}>
                  <GradeIcon />
                  <Typography>{details?.Ratings[0].Value}</Typography>
                </span>
              </>
            )}
          </Box>
        )}
      </CardActionArea>
    </Card>
  );
};
