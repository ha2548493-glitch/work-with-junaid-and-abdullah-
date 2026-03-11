import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam';

const LeanWebCam = () => {
    const [webSrc,setWebSrc] = useState(null);
    const CamWebSrc = useRef(null);
    const Capture =useCallback(()=>{
const abc = CamWebSrc.current.getScreenshot();
      setWebSrc(abc);
    },[CamWebSrc]);

    const Retake=()=>{
        setWebSrc(null);
    }
  return (
    <div>
        <img src={webSrc}></img>
        <button onClick={Capture}>Take Photo</button>
        <Webcam height={600} width={600} ref={CamWebSrc}/>
        <button onClick={Retake}>ReTake Photo</button>
    </div>
  )
}

export default LeanWebCam ;