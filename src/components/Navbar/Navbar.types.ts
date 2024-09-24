import * as SharedTypes from "../../shared/types/SharedTypes";

export type NavbarProps = {
  setMoviesData: React.Dispatch<
    React.SetStateAction<SharedTypes.MoviesResponse | undefined>
  >;
};
