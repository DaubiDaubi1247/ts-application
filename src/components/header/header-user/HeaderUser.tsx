import React from 'react';

interface HeaderUserPropsTypes {
    imgUrl?: string;
    userName: string;
}

const HeaderUser : React.FC<HeaderUserPropsTypes> = (props) => {
    return (
        <div>
            <img src={props.imgUrl || undefined} alt="" />
            <span>{props.userName}</span>
        </div>
    );
}

export default HeaderUser;