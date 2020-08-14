import { getMovies, searchMovieGetById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => searchMovieGetById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
