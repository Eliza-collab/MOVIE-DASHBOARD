// 1. Define what a Movie object looks like (temporary until src/types/Movie.ts is ready)
export interface Movie {
  id: string | number;
  title: string;
  watched?: boolean;
  rating?: number;
}

// 2. Define the shape of the calculated stats object we will return
export interface MovieStatsResult {
  totalMovies: number;
  watchedCount: number;
  averageRating: number;
}

// 3. The helper function that takes an array of movies and computes the numbers
export function calculateMovieStats(movies: Movie[]): MovieStatsResult {
  const totalMovies = movies.length;
  const watchedCount = movies.filter((movie) => movie.watched).length;

  const ratedMovies = movies.filter((movie) => typeof movie.rating === 'number');
  const totalRating = ratedMovies.reduce((sum, movie) => sum + (movie.rating ?? 0), 0);
  const averageRating =
    ratedMovies.length > 0 ? Number((totalRating / ratedMovies.length).toFixed(1)) : 0;

  return {
    totalMovies,
    watchedCount,
    averageRating,
  };
}