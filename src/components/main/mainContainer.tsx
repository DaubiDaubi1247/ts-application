import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetStartFilmsItemType } from "../../api/api-types";
import Preloader from "../../common/Preloader";
import { setLoading } from "../../redux/reducer/actions/common-actions";
import { getStartFilms } from "../../redux/reducer/films-header-reducer";
import { AppStateType } from "../../redux/store";
import FilmCard from "./filmCard/filmCard";
import "./mainContainer.scss"
import UserFilms from "./userFilms/userFilms";

const COUNT_CARDS = 4;

export type VisibleCardsType = Array<React.ReactElement>;

const MainContainer: React.FC = () => {

    const startFilms: Array<GetStartFilmsItemType> = useSelector((state: AppStateType) => state.films.startFilms);
    const userFilms: Array<GetStartFilmsItemType> = useSelector((state: AppStateType) => state.films.userFilms)
    const isLoading: boolean = useSelector((state: AppStateType) => state.commonReducer.isLoading);

    const [visibleCards, setVisibleCards] = useState<VisibleCardsType>([]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLoading(true))
        dispatch(getStartFilms())
    }, [])

    useEffect(() => {
        setVisibleCards([...getMoreFilms(startFilms, visibleCards.length)])
    }, [startFilms.length])

    const getMoreFilms = (arrFilms: Array<GetStartFilmsItemType>, lastIndexVisibleCard: number) => {
        let tempArrForVisibleCards: VisibleCardsType = []
        for (let i = lastIndexVisibleCard, j = 0; j < COUNT_CARDS && arrFilms.length; i++, j++) {
            tempArrForVisibleCards.push(<FilmCard {...arrFilms[i]} />);
        }
        return tempArrForVisibleCards
    };

    return (
        <main className="films">
            {isLoading ? <Preloader /> :
                <div className="films__wrapper">
                    {userFilms.length ? <UserFilms userFilms={userFilms}/> :
                        <div className="films__start-films">
                            {visibleCards}
                            <button className="films__getMore-button button upgrade-button" onClick={() => setVisibleCards([...visibleCards, ...getMoreFilms(startFilms, visibleCards.length)])}>
                                Посмотреть дальше
                            </button>
                        </div>
                    }
                </div>
            }
        </main>
    );
}

export default MainContainer
