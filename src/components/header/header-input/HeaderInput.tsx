import React, { useEffect, useState } from "react";
import { SetUserInputType } from "../../../redux/reducer/types/fims-types";
import "./header-input.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { getUserFilms } from "../../../redux/reducer/films-header-reducer";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate, } from "react-router-dom";

export interface HeaderInputProps {
    setUserInput: (text: string) => SetUserInputType
}
const HeaderInput: React.FC<HeaderInputProps> = (props) => {
    const [userInput, setUserInput] = useState<string>("");
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch()
    const submitUserInput = (): void => {
        dispatch(getUserFilms(userInput))
        props.setUserInput(userInput);
        setUserInput("");
        setRedirect(true)
    }
    useEffect(() => {
        return () => setRedirect(false)
    })
    return (
        <div className="header-input">
            <form action="" className="header-input__form">
                <input className="header-input__input" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)} value={userInput} placeholder="Фильм, сериал, персонаж" />

                <button type="button" className="header-input__search-button" onClick={submitUserInput}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            {redirect ? <Navigate to="/films/user"/> : null} 
        </div>
    );
}

export default HeaderInput