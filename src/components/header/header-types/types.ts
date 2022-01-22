import { SetUserInputType } from "../../../redux/reducer/types/fims-types";

export interface mapDispatchToPropsType {
    setUserInput : (userInput : string) => SetUserInputType
} 

export type HeaderContainerProps = mapDispatchToPropsType