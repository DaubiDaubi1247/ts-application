import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFullDescription, getTrailerURL } from "../../redux/reducer/films-header-reducer";
import {GetFullDescriptionResponseType} from "../../api/api-types"
import { AppStateType } from "../../redux/store";
import FullDescription from "./fullDescription/filmDescription";
import Preloader from "../../common/Preloader";
import { setLoading } from "../../redux/reducer/actions/common-actions";
import { nullingFullDescr } from "../../redux/reducer/actions/films-actions";

const FullDescriptionFilmContainer: React.FC = () => {
    const isLoading: boolean = useSelector((state: AppStateType) => state.commonReducer.isLoading);
    const filmInfo : GetFullDescriptionResponseType | null = useSelector((state: AppStateType) => state.films.fullDescr)
    const videoIdForYoutube : string = useSelector((state: AppStateType) => state.films.videoIdForYoutube)
    const dispatch = useDispatch()
    const {id} = useParams<string>();
    
    useEffect(() => {
        dispatch(setLoading(true));
        dispatch(getFullDescription(id))
        return () => {dispatch(nullingFullDescr())}
    },[])

     
    return isLoading ? <Preloader /> : 
        <div className="full-description">
            <FullDescription dispatch={dispatch} data={filmInfo} videoIdForYoutube={videoIdForYoutube} setTrailerURL={getTrailerURL} isLoading={isLoading}/>
        </div>
}

export default FullDescriptionFilmContainer;