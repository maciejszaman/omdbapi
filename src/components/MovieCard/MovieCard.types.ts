import * as SharedTypes from "../../shared/types/SharedTypes";

export interface MovieCardProps {
  props: SharedTypes.Movie;
}

export interface MovieDetails {
  Title: string;
  Year: string;
  Ratings: Rating[];
  Country: string;
  Released: string;
  Plot: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Language: string;
  Awards: string;
}

interface Rating {
  Source: string;
  Value: string;
}
