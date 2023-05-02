import axios from "axios";

export const APIkey = "22eb4651bda4bb8a0937aba1379d5b59";

export const api = axios.create({
	baseURL: "https://api.openweathermap.org/data/2.5/",
});
