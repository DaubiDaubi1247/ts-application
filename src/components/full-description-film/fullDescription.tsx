import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFullDescription } from "../../redux/reducer/films-header-reducer";
import {GetFullDescriptionResponseType} from "../../api/api-types"
import { AppStateType } from "../../redux/store";
import FullDescription from "./fullDescription/filmDescription";

const FullDescriptionFilmContainer: React.FC = () => {
    const filmInfo : GetFullDescriptionResponseType | null = useSelector((state: AppStateType) => state.films.fullDescr)
    const dispatch = useDispatch()
    const {id} = useParams<string>();
    
    useEffect(() => {
        dispatch(getFullDescription(id))
    },[])

     
    return (
        <div className="full-description">
            <FullDescription data={filmInfo}/>
        </div>
    );
}

export default FullDescriptionFilmContainer;