import React, { useState } from "react";
import { SetUserInputType } from "../../../redux/reducer/types/fims-types";
import "./header-input.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export interface HeaderInputProps {
    setUserInput: (text: string) => SetUserInputType
}

const HeaderInput: React.FC<HeaderInputProps> = (props) => {
    const [userInput, setUserInput] = useState("");
    const submitUserInput = (): void => {
        props.setUserInput(userInput);
    }

    return (
        <div className="header-input">
            <form action="" className="header-input__form">
                <input className="header-input__input" type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)} value={userInput} placeholder="Фильм, сериал, персонаж" />

                <button type="button" className="header-input__search-button" onClick={submitUserInput}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    );
}

export default HeaderInput