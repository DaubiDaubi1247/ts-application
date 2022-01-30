import { GetStartFilmsItemType } from "../../../../api/api-types";
import FilmCard from "../../filmCard/filmCard";
import { VisibleCardsType } from "../../mainContainer";

interface UserFilmsT {
    userFilms : Array<GetStartFilmsItemType>
}

const UserFilms: React.FC<UserFilmsT> = (props) => {
    const userFilmsArr: VisibleCardsType = props.userFilms.map(el => <FilmCard {...el} />)
    return (  
        <div>
            {userFilmsArr}
        </div>
    );
}

export default UserFilms;