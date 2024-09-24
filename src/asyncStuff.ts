import { getMovies } from "./getMovies";
import Movie from "./movie";

async function getMoviesByStreaming(): Promise<Movie[]> {
  let p: Promise<Movie[]> = new Promise((resolve, reject) => {
    // simulate something that takes time
    setTimeout(() => {
      let foundMovies: Movie[] = getMovies().filter((movie) => {
        return movie.streaming;
      });
      if (foundMovies.length > 0) {
        resolve(foundMovies);
      } else {
        reject("No movies were found.");
      }
    }, 2000);
  });
  return p;
}

console.log("search is going on...");
getMoviesByStreaming()
  .then((movies) => {
    console.log(`Found movies: ${JSON.stringify(movies, null, 2)}`);
  })
  .catch((err) => console.log(`Error: ${err}`));
console.log("search completed");
