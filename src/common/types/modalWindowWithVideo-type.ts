import { Dispatch, SetStateAction } from "react";


export interface ModalWindowWithVideoT {
    videoIdForYoutube: string;
    closeModal : Dispatch<SetStateAction<boolean>>;
    isLoading: boolean
}

export type closeModalEventT = React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLElement>
