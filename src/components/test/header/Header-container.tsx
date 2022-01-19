import React from "react"
import { connect } from "react-redux"
import HeaderInput from "./header-input/HeaderInput"
import HeaderTitle from "./headerTitle/HeaderTitle"
import {AppStateType} from "../../../redux/store"
import { setUserInput } from "../../../redux/reducer/films-reducer"
import { HeaderContainerProps, mapDispatchToPropsType } from "../../header-types/types"
import "./header-container.scss"
import HeaderUser from "./header-user/HeaderUser"



const HeaderContainer : React.FC<HeaderContainerProps> = (props : any) => {
    return (
        <div className="header__wrapper">
            <HeaderTitle title={"Название"}/>
            <HeaderInput setUserInput={props.setUserInput}/>
            <HeaderUser userName="sanek"/>
        </div>
    )
}


const mapStateToProps = (state : AppStateType) => {
    
}


export default connect<null,mapDispatchToPropsType>(null, {
    setUserInput
})(HeaderContainer)