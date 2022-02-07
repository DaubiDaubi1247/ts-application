import { useSelector } from "react-redux";
import { GetStartFilmsItemType } from "../../../api/api-types";
import { AppStateType } from "../../../redux/store";
import UserFilms from "./userFilms/userFilms";


const UserFilmContainer = () => {
    const userFilms: Array<GetStartFilmsItemType> = useSelector((state: AppStateType) => state.films.userFilms)

    return (
        <div className="">
            <UserFilms userFilms={userFilms}/>
        </div>
    );
}

export default UserFilmContainer;