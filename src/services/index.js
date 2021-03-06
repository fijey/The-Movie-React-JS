import axios from 'axios';

const apiKey = "2eef7f621d0b892c273a8a26785b783d";
const url = "https://api.themoviedb.org/3";

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${url}/${path}`)
        .then((result) => {
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

const getPopulerMovie = () => Get(`movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
const getListGenre = () => Get(`genre/movie/list?api_key=${apiKey}&language=en-US`);
const getListMovieDiscover = () => Get(`discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`);

const API = {
    getPopulerMovie,
    getListGenre,
    getListMovieDiscover
}

export default API;