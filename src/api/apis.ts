import { GetActorInfoResponseType, GetFullDescriptionResponseType, GetStartFilmsResponseType, GetUserFilmsResponseType } from './api-types';
import axios from "axios";

const baseData = axios.create({
    baseURL: "https://imdb-api.com/en/API/",
})

export const filmsAPI = {
    getStartFilms() {
        return baseData.get<GetStartFilmsResponseType>("MostPopularMovies/k_hflr49q2").then(res => res.data)
    },

    getUserFilms(filmName: string) {
        return baseData.get<GetUserFilmsResponseType>(`SearchMovie/k_hflr49q2/${filmName}`).then(res => res.data)
    },
    getFullDescription(id: string | undefined) {
        return baseData.get<GetFullDescriptionResponseType>(`Title/k_hflr49q2/${id}`).then(res => res.data)
    },
    getActorInfo (id: string | undefined) {
        return baseData.get<GetActorInfoResponseType>(`Name/k_hflr49q2/${id}`).then(res => res.data);
    }
}
