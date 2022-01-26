import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActorInfo } from "../../films-header-reducer";
import {GetActorInfoResponseType} from "../../../../api/api-types"
import { AppStateType } from "../../../store";

const ActorsInfoContainer: React.FC= () => {
    const actorInfo : GetActorInfoResponseType | null= useSelector((state: AppStateType) => state.films.actorInfo)
    const {id} = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getActorInfo(id))  
    })
    return (
        <div>

        </div>
    );
}

export default ActorsInfoContainer;