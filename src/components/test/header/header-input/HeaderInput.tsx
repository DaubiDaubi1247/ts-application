import React, { InputHTMLAttributes, useState } from "react";
import { SetUserInputType } from "../../../../redux/reducer/types/fims-types";

export interface HeaderInputProps {
    setUserInput :(text : string) => SetUserInputType  
}

const HeaderInput : React.FC<HeaderInputProps> = (props) => { // кнопку сделать как на кинопоиске
    const [userInput, setUserInput] = useState("");
    const submitUserInput = () : void => {
        props.setUserInput(userInput);
    }
    return (
        <div>
            <form action="">
                <input type="text" onChange={(e : React.ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)} value={userInput} />
            </form>
                <button onClick={submitUserInput}>Найти фильм</button> 
        </div>
    );
}

export default HeaderInput