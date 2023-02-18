import axios from 'axios';

class MovieAPI {
  #API_KEY;
  #BASE_URL;

  constructor(API_KEY, BASE_URL) {
    this.#API_KEY = '05b379a62bb2f2e51c79837a2df0fc22';
    this.#BASE_URL = 'https://api.themoviedb.org/3';
  }

  async fetchWithErrorHandling(url = '') {
    const responce = await axios(url);

    return responce
      ? await responce.data
      : Promise.reject(new Error('Not found'));
  }

  fetchTrendingMovies() {
    return this.fetchWithErrorHandling(
      `${this.#BASE_URL}/trending/movie/day?api_key=${this.#API_KEY}`,
    );
  }

  fetchMoviesByQuery(query) {
    return this.fetchWithErrorHandling(
      `${this.#BASE_URL}/search/movie?api_key=${
        this.#API_KEY
      }&query=${query}`,
    );
  }

  fetchFullMovieInfo(movieId) {
    return this.fetchWithErrorHandling(
      `${this.#BASE_URL}/movie/${movieId}?api_key=${this.#API_KEY}`,
    );
  }

  fetchCastingInfo(movieId) {
    return this.fetchWithErrorHandling(
      `${this.#BASE_URL}/movie/${movieId}/credits?api_key=${
        this.#API_KEY
      }`,
    );
  }

  fetchMovieReview(movieId) {
    return this.fetchWithErrorHandling(
      `${this.#BASE_URL}/movie/${movieId}/reviews?api_key=${
        this.#API_KEY
      }`,
    );
  }
}

export const movieAPI = new MovieAPI();

const API_KEY = '05b379a62bb2f2e51c79837a2df0fc22';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchWithErrorHandling(url = '') {
  // const responce = await fetch(url);
  const responce = await axios(url);
  return responce
    ? await responce.data
    : Promise.reject(new Error('Not found'));
}

// трендовые фильмы

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
}

// поиск по значению

export function fetchMoviesByQuery(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
}

// полная информация о фильме

export function fetchFullMovieInfo(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
  );
}

// информация об актёрах

export function fetchCastingInfo(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
  );
}

// обзор фильма

export function fetchMovieReview(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
  );
}
