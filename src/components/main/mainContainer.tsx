import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { GetStartFilmsItemType } from "../../api/api-types";
import { getStartFilms } from "../../redux/reducer/films-header-reducer";
import {AppStateType} from "../../redux/store";
import FilmCard from "./filmCard/filmCard";
import "./mainContainer.scss"
const COUNT_CARDS = 4;

type VisibleCardsType = Array<React.ReactElement>;

const MainContainer :React.FC = () => { // есть баг! при обновлении показывает начиная с 4 фильма

    const startFilms: Array<GetStartFilmsItemType> = useSelector((state : AppStateType) => state.startFilms);
    
    const [visibleCards, setVisibleCards] = useState <VisibleCardsType>([]);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStartFilms())
    },[])
    useEffect(() => {
        setVisibleCards([...getArrFilms(startFilms,visibleCards.length)])
    },[startFilms.length])
    
    const getArrFilms = (arrFilms : Array<GetStartFilmsItemType>,lastIndexVisibleCard : number) => {
        let tempArrForVisibleCards : VisibleCardsType = [] 
        for (let i = lastIndexVisibleCard,j = 0; j < COUNT_CARDS && arrFilms.length; i++,j++) {
            tempArrForVisibleCards.push(<FilmCard {...arrFilms[i]}/>);
        }
        return tempArrForVisibleCards
    };
    
    return (
        <main className="films">
            {visibleCards}
            <button className="films__getMore-button button upgrade-button" onClick={() => setVisibleCards([...visibleCards,...getArrFilms(startFilms,visibleCards.length)])}>Посмотреть дальше </button>
        </main>
    );
}

export default MainContainer
