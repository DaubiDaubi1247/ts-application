import { useEffect, useState } from "react";
import Preloader from "./Preloader";

interface ImgPropsT {
    URL: string;
}

const ImgWithPreloader: React.FC<ImgPropsT> = (props) => {
    const [url, setUrl] = useState('');
    useEffect(() => {
      fetch(props.URL)
        .then(response => response.blob())
        .then((image) => {
          setUrl(URL.createObjectURL(image));
        });
    },[]);

    return url ? <img src={url} alt="" /> : <Preloader/>;
}

export default ImgWithPreloader;