import { NavLink } from "react-router-dom";
import { GetFullDescriptionResponseType } from "../../../api/api-types";
import ImgWithPreloader from "../../../common/imgWithPreloader";
import Preloader from "../../../common/Preloader";
import { VisibleCardsType } from "../../main/mainContainer";
import "./full-description.scss"

interface GetFullDescriptionPropsT {
    data : GetFullDescriptionResponseType | null
}

const FullDescription: React.FC<GetFullDescriptionPropsT> = (props) => {
    if (props.data === null) {
        return <Preloader/>
    }

    const getActorLinkArr : VisibleCardsType = props.data.starList.map(el => <div className="link__actors-or-films">
        <NavLink className="" to={`/actor/${el.id}`}>{el.name}</NavLink>
    </div>)

    const date = new Date(props.data.releaseDate);
    return (
        <div className="full-description__wrapper">
            <div className="full-description__name">
                <span className="full-description__item">
                    {props.data.fullTitle || props.data.title}
                </span>
            </div>
            <div className="full-description__data">
                <div className="full-description__image">
                    <ImgWithPreloader URL={props.data.image}/>
                </div>
                <div className="full-description__text-description">
                    <span className="description-title">
                        <span className="full-description__item">Дата Релиза</span> : {date.toLocaleDateString()}
                    </span>
                    <span className="full-description__imdbRating description-title">
                        <span className="full-description__item">Рейтинг на IMDB</span> : {props.data.imDbRating}
                    </span>
                    <span className="full-description__mcRating description-title">
                        <span className="full-description__item">Рейтинг на MetaCritic</span> : {props.data.metacriticRating}
                    </span>
                    <span className="full-description__descr description-title">
                       <span className="full-description__item">Описание</span> : {props.data.plotLocal?.length ? props.data.plotLocal:props.data.plot}
                    </span>
                <div className="full-description__navLinks full-description__item">
                    <span >Актеры которые снимались в {props.data.fullTitle} : </span>
                    {getActorLinkArr}
                </div>
                </div>
            </div>
        </div>
    )
}

export default FullDescription