import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json";

/**
 * @desc  영화 목록
 * @param {Number} limit
 * @param {Number} rating
 */
export const getMovies = (limit, rating) => {
  return fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
