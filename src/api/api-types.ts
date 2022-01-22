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