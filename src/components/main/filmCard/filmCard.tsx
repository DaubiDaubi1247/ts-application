import React from 'react';
import { GetStartFilmsItemType } from '../../../api/api-types';
import { NavLink } from 'react-router-dom';
import "./film-card.scss"

const FilmCard: React.FC<GetStartFilmsItemType> = (props) => {

    return (
        <div className="film-card">
            <NavLink to={"films/" + props.id} className="link">
                <span className="film-card__film-title">{props.fullTitle || props.title}</span>
            </NavLink>
            <div className="film-card__grid-wrapper">
                <div className="film-card__img">
                    <NavLink to={"films/" + props.id}>
                        <img src={props.image} alt="" />
                    </NavLink>
                </div>
                <div className="film-card__description">
                    {props.crew ? <span className="film-card__authors film-card__desc-section"><span className="film-card__desc-title">Авторы</span> : {props.crew}</span>
                        :
                        null}
                    {props.imDbRating ? <span className="film-card__rating film-card__desc-section"><span className="film-card__desc-title">Рейтинг на IMDB</span> : {props.imDbRating}</span>
                        :
                        null}
                    {props.rankUpDown ? <span className="film-card__rating film-card__desc-section"><span className="film-card__desc-title">Поднялся/опустился в рейтинге IMDB</span> : {props.rankUpDown}</span>
                        :
                        null}
                </div>
            </div>
        </div>
    )
}

export default FilmCard