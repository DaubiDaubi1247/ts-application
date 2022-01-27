export interface GetStartFilmsItemType {
    id: string
    rankUpDown?: string,
    fullTitle?: string,
    title: string
    year?: number,
    image: string,
    crew?: string,
    imDbRating?: number,

}

export interface GetStartFilmsResponseType {
    items: Array<GetStartFilmsItemType>
}

export interface GetUserFilmsResponseType {
    results: Array<GetStartFilmsItemType>
}

type ArrayList = Array<{
    id : string
    name : string
}>

export interface GetFullDescriptionResponseType {
    id : string
    title: string,
    fullTitle: string
    year: number,
    image: string
    releaseDate: number
    plot: string
    plotLocal?: string
    awards: string,
    directorList: ArrayList
    writersList:ArrayList
    starList: ArrayList
    companiesList: ArrayList
    imDbRating: string
    metacriticRating: string
}

interface knowForType {
    id : string
    title : string
    fullTitle : string
    year : number
    role : string
    image : string
}

export interface GetActorInfoResponseType {
    id : string
    name : string
    image : string
    summary : string
    birthDate : string
    awards : string
    knownFor : Array<knowForType>
}