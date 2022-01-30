import { Dispatch, SetStateAction } from "react";


export interface ModalWindowWithVideoT {
    URL: string;
    closeModal : Dispatch<SetStateAction<boolean>>;
}