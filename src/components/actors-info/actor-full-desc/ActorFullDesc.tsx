import { NavLink } from "react-router-dom";
import { GetActorInfoResponseType } from "../../../api/api-types";
import ImgWithPreloader from "../../../common/imgWithPreloader";
import Preloader from "../../../common/Preloader";
import { VisibleCardsType } from "../../main/mainContainer";
import "./actor-info.scss"
interface GetFullInfoPropsT {
    data : GetActorInfoResponseType | null
}

const ActorFullInfo: React.FC<GetFullInfoPropsT> = (props) => {
    if (props.data === null) {
        return <Preloader/>
    }
    const getFilmsLinkArr : VisibleCardsType = props.data.knownFor.map(el => <div className="link__actors-or-films">
        <NavLink to={`/films/${el.id}`}>{el.fullTitle}</NavLink>
    </div>)
        const date = new Date(props.data.birthDate);

    return (
        <div className="full-description__wrapper">
            <div className="full-description__name">
                <span className="full-description__item">
                    {props.data.name}
                </span>
            </div>
            <div className="full-description__data">
                <div className="full-description__image">
                    <ImgWithPreloader URL={props.data.image}/>
                </div>
                <div className="full-description__text-description">
                    <span className="description-title">
                        <span className="full-description__item"> Награды </span> : {props.data.awards}
                    </span>
                    <span className="full-description__birthDate description-title">
                        <span className="full-description__item">Дата рождения</span> : {date.toLocaleDateString()}
                    </span>
                    <span className="full-description__description description-title">
                        <span className="full-description__item">Описание</span> : {props.data.summary}
                    </span>
                    <div className="full-description__navLinks full-description__item">
                    <span >Фильмы в которых снимался {props.data.name} : </span>
                    {getFilmsLinkArr}
                </div>
                </div>
                
            </div>
        </div>
    )
}


export default ActorFullInfo;