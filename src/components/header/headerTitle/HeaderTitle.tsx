import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderTitleProps {
    title: string;
}
const HeaderTitle : React.FC<HeaderTitleProps>  = (props) => {
    return (
        <div>
            <NavLink to='/'>{props.title}</NavLink>
        </div>
    );
}

export default HeaderTitle;