import axios from "axios"

export const POKE_API = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})