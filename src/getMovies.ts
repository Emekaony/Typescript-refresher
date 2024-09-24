import Movie from "./movie";

export function getMovies(): Movie[] {
  return [
    {
      director: "Quentin Tarantino",
      title: "Pulp Fiction",
      streaming: false,
      length: 2.8,
    },
    {
      director: "Steven Spielberg",
      title: "Jurassic Park",
      streaming: true,
      length: 2.1,
    },
    {
      director: "Sofia Coppola",
      title: "Lost in Translation",
      streaming: true,
      length: 1.7,
    },
    {
      director: "Martin Scorsese",
      title: "The Wolf of Wall Street",
      streaming: false,
      length: 3,
    },
    {
      director: "Greta Gerwig",
      title: "Lady Bird",
      streaming: true,
      length: 1.9,
    },
    {
      director: "James Cameron",
      title: "Avatar",
      streaming: false,
      length: 2.7,
    },
    {
      director: "Denis Villeneuve",
      title: "Blade Runner 2049",
      streaming: true,
      length: 2.9,
    },
    {
      director: "Alfonso Cuarón",
      title: "Gravity",
      streaming: true,
      length: 1.5,
    },
    {
      director: "Stanley Kubrick",
      title: "2001: A Space Odyssey",
      streaming: false,
      length: 2.4,
    },
    {
      director: "Wes Anderson",
      title: "The Grand Budapest Hotel",
      streaming: true,
      length: 1.6,
    },
  ];
}
