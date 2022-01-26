import React from "react"
import { connect } from "react-redux"
import { setUserInput } from "../../redux/reducer/actions/films-actions"
import { HeaderContainerProps, mapDispatchToPropsType } from "./header-types/types"
import "./header-container.scss"
import HeaderUser from "./header-user/HeaderUser"
import HeaderTitle from "./headerTitle/HeaderTitle"
import HeaderInput from "./header-input/HeaderInput"

const HeaderContainer : React.FC<HeaderContainerProps> = (props) => {
    return (
        <div className="header__wrapper">
            <HeaderTitle title={"Название"}/>
            <HeaderInput setUserInput={props.setUserInput}/>
            <HeaderUser userName="userName"/>
        </div>
    )
}





export default connect<null,mapDispatchToPropsType>(null, {
    setUserInput
})(HeaderContainer)