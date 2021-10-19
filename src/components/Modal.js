import React, {useContext} from 'react'
import { StateContext } from "../context/State";

import { VideoProgress } from 'react-video-progress'


function Modal() {

    const {isModalOpen, closeModal, playOrPause, videoRef} = useContext(StateContext)

    return (
        <div className={`${
            isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
          }`}>
            <div className={`modal-container ${
                isModalOpen ? 'show-cursor' : 'hide-cursor'
            }`}>
                
                <VideoProgress
                    progressStart="BottomLeft"
                    type="BottomLine"
                    pathColor="red"
                    pathWidth="10px"
                    pathBorderRadius="2px"
                    src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                    // controls="none"
                    onClick={playOrPause}
                    ref={videoRef}
                />
               
                
                <button onClick={closeModal}
                    className={`close-modal-btn ${
                        isModalOpen ? 'show-cursor' : 'hide-cursor'
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Modal
