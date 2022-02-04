import { useEffect } from "react";
import { closeModalEventT, ModalWindowWithVideoT } from "./types/modalWindowWithVideo-type";
import "./styles/modal.scss"
import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../redux/store";
import Preloader from "./Preloader";
import { setLoading } from "../redux/reducer/actions/common-actions";
import { nullingVideoForYoutube } from "../redux/reducer/actions/films-actions";


const ModalWindowWithVideo: React.FC<ModalWindowWithVideoT> = (props) => {
    const dispatch = useDispatch()
    const exitFromModal = (e : any) => {
        props.closeModal(false)      
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown',exitFromModal)
        return () => {
            dispatch(nullingVideoForYoutube())
            document.body.style.overflow = 'scroll'
            document.removeEventListener('keydown', exitFromModal)
        }
    }, [])
    return props.isLoading ? <Preloader/> : 
        <div className="modal" onClick={exitFromModal}>
            <div className="modal__main">
                <div className="modal__video">
                    {props.videoIdForYoutube.length ? <YouTube videoId={props.videoIdForYoutube} className="" /> : <Preloader/>}
                </div>
                <button className="modal__close-btn " onClick={exitFromModal} >
                    X
                </button>
            </div>
        </div>
}

export default ModalWindowWithVideo;

