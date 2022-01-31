import { useEffect } from "react";
import { closeModalEventT, ModalWindowWithVideoT } from "./types/modalWindowWithVideo-type";
import "./styles/modal.scss"
import YouTube from "react-youtube";


const ModalWindowWithVideo: React.FC<ModalWindowWithVideoT> = (props) => {
    const exitFromModal = (e : any) => {
        console.log(e);
        if (1) {
            props.closeModal(false)      
        }
    }
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown',exitFromModal)
        return () => {
            document.body.style.overflow = 'scroll'
            document.removeEventListener('keydown', exitFromModal)
        }
    }, [])
    return (
        <div className="modal">
            <div className="modal__main">
                <div className="modal__video">
                    {props.videoIdForYoutube.length ? <YouTube videoId={props.videoIdForYoutube} /> : null}
                </div>
                <button className="modal__close-btn " onClick={exitFromModal}>
                    X
                </button>
            </div>
        </div>
    );
}

export default ModalWindowWithVideo;

