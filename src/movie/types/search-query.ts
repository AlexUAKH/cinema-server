import { EGenres } from './genres';

export interface ISearchQuery {
  movie_id?: string;
  name?: string;
  genres?: EGenres;
}
