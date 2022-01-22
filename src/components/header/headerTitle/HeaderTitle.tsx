import React from 'react';

interface HeaderTitleProps {
    title: string;
}
const HeaderTitle : React.FC<HeaderTitleProps>  = (props) => {
    return (
        <div>
            <span>{props.title}</span>
        </div>
    );
}

export default HeaderTitle;