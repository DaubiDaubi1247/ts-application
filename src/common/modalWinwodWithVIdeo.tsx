import { useEffect } from "react";
import { ModalWindowWithVideoT } from "./types/modalWindowWithVideo-type";
import "./styles/modal.scss"
import YouTube from "react-youtube";

const ModalWindowWithVideo: React.FC<ModalWindowWithVideoT> = (props) => {
    const exitFromModal = () => {
        props.closeModal(false)
    }
    useEffect(() => {
        document.addEventListener('keydown', exitFromModal)
        return () => document.removeEventListener('keydown', exitFromModal)
      },[props.URL])
    return (
        <div className="modal">
            {/* {props.URL.length ? <iframe width="560" height="315"
    src={props.URL}title="video">
</iframe> : null} */}
        </div>
    );
}

export default ModalWindowWithVideo;