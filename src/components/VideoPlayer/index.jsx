import clsx from "clsx";
import React, { useEffect , useRef, useState} from "react"
import style from'./index.module.css'
import VideoPlayerActions from "./VideoPlayerActions";
// const SRC='https://v16-webapp.tiktok.com/6b817393df84f97dc06c2719c9378d80/62e209dc/video/tos/useast2a/tos-useast2a-pve-0068/8001d66c6972446badf853040a0e9491/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1898&bt=949&btag=80000&cs=0&ds=3&ft=eXd.6HmzMyq8ZDHx5we2NjlYol7Gb&mime_type=video_mp4&qs=0&rc=Mzw3Omk2aDs6OTM3Omk8OUBpajV1ODQ6ZjVrZDMzNzczM0AyM2JfNmIxNWMxNjU0MDBhYSMvczJvcjRnZmxgLS1kMTZzcw%3D%3D&l=2022072721584701021702913524670A92'

export default function VideoPlayer({src}){
    const [playing, setPlaying] = useState(false) 
    const video = useRef(null); 
    
    const handlePlay=()=>{
        const {current:videoEl}=video
        playing
            ? videoEl.pause()// la line 11 y 12 reemplaza lo que hace el condicional
            : videoEl.play()
        // if(playing){
        //     video.current.pause()
        // }else{
        //     video.current.play()
        // }
        setPlaying(!playing)
    }

    const playerClassName = clsx(style.player,{
        [style.hidden] : playing,
    })

    return(
        <div className={style.wrapper}>
            <video 
            className={style.video} 
            src={src} 
            controls={false}
            loop
            ref={video}
            onClick={handlePlay}
            />
            <i className={playerClassName} onClick={handlePlay}/>
            <VideoPlayerActions/>
        </div>
    )
}