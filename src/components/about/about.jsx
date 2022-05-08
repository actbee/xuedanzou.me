import "./about.scss"
import ReactPlayer from 'react-player'

export default function About(){

const videoURL1 = "../../../assets/TOKYOMOOD.mp4"
const videoURL2 = "../../../assets/TOKYO1990s.mp4"

    return(
        <div className = "about" id = "about">
            <div className = "message">
            <ReactPlayer className = "video_background" url = {videoURL2} loop = "ture" width= "1300px" height= "1200px" volume = {0}  playing/>
            </div>

            {/*
           <div className = "video_body">
        <ReactPlayer className = "video_background" url = {videoURL1} loop = "ture" width= "600px" height= "600px" volume = {0}  playing/>
        </div>
    */}
        </div>
    )
}