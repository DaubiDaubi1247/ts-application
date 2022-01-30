import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActorInfo } from "../../redux/reducer/films-header-reducer";
import {GetActorInfoResponseType} from "../../api/api-types"
import { AppStateType } from "../../redux/store";
import ActorFullInfo from "./actor-full-desc/ActorFullDesc";

const ActorsInfoContainer: React.FC= () => {
    const actorInfo : GetActorInfoResponseType | null= useSelector((state: AppStateType) => state.films.actorInfo)
    const {id} = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getActorInfo(id))  
    },[])
    return (
        <div className="full-description">
            <ActorFullInfo data={actorInfo}/>
        </div>
    );
}

export default ActorsInfoContainer;