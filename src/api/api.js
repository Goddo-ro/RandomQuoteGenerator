import axios from "axios";

const API_URL = "https://api.forismatic.com/api/1.0/";
    // ?method=getQuote&key=random&format=jsonp&lang=ru&jsonp=?

const $api = axios.create({
    baseURL: API_URL
})

export default $api;