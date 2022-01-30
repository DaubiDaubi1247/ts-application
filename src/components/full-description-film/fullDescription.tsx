import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFullDescription, getTrailerURL } from "../../redux/reducer/films-header-reducer";
import {GetFullDescriptionResponseType} from "../../api/api-types"
import { AppStateType } from "../../redux/store";
import FullDescription from "./fullDescription/filmDescription";

const FullDescriptionFilmContainer: React.FC = () => {
    const filmInfo : GetFullDescriptionResponseType | null = useSelector((state: AppStateType) => state.films.fullDescr)
    const URL : string = useSelector((state: AppStateType) => state.films.trailerURL)
    const dispatch = useDispatch()
    const {id} = useParams<string>();
    
    useEffect(() => {
        dispatch(getFullDescription(id))
    },[])

     
    return (
        <div className="full-description">
            <FullDescription dispatch={dispatch} data={filmInfo} URL={URL} setTrailerURL={getTrailerURL}/>
        </div>
    );
}

export default FullDescriptionFilmContainer;