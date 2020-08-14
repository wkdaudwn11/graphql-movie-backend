// 영화 목록
let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1,
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8,
  },
  {
    id: 2,
    name: "The Godfather 1",
    score: 99,
  },
  {
    id: 3,
    name: "Logan",
    score: 2,
  },
];

/**
 * @desc  영화 목록을 리턴해주는 함수
 */
export const getMovies = () => movies;

/**
 * @desc  영화 검색
 * @param {Number} id
 */
export const searchMovieGetById = (id) => {
  const filteredMovies = movies.filter((movie) => id === movie.id);
  return filteredMovies[0];
};

/**
 * @desc  영화 삭제
 * @param {Number} id
 */
export const deleteMovie = (id) => {
  const cleanMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

/**
 * @desc  movies 배열의 마지막 요소를 리턴해주는 함수
 */
const getLastMovie = () => {
  return movies[movies.length - 1];
};

/**
 * @desc  영화 추가
 * @param {String}  name
 * @param {Number}  score
 */
export const addMovie = (name, score) => {
  if (!name || !score) return;
  const lastMovie = getLastMovie();
  const newMovie = {
    id: lastMovie.id + 1,
    name,
    score,
  };
  movies = movies.concat(newMovie);
  return newMovie;
};
