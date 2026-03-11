import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam';
import { IoIosCamera } from "react-icons/io";
import { IoIosReverseCamera } from "react-icons/io";
import Button from '@mui/material/Button';


const WebLearnCam = () => {
    const WebCamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const Capture = useCallback(() => {
        const abc = WebCamRef.current.getScreenshot();
        setImgSrc(abc);
    }, [WebCamRef]);
    const Retake = () => {
        setImgSrc(null);
    }
    return (
        <div>
            <h1>
                WebCam
            </h1>
            <div className="container">
                <div className="image">
                    {imgSrc ? (<img src={imgSrc} alt="Take Photo" height={300} width={400}/>) : (<Webcam ref={WebCamRef} height={400} width={400}/>)}

                </div>
                <div className="buttons">

                    {imgSrc ? (<Button onClick={Retake} variant="contained" endIcon={<IoIosReverseCamera />
                    }>
                        Retake
                    </Button>) : (<Button onClick={Capture} variant="contained" endIcon={<IoIosCamera />
                    }>
                        Take
                    </Button>)}
                </div>
           </div>
        </div>
    )
}

export default WebLearnCam;