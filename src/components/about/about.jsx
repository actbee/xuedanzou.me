import "./about.scss"
import ReactPlayer from 'react-player'

export default function About(){

const videoURL1 = "../../../assets/TOKYOMOOD.mp4"
const videoURL2 = "../../../assets/TOKYO1990s.mp4"

    return(
        <div className = "about" id = "about">
            <div className = "text-box"></div>
            <div className = "texts">
                <div className = "title">
                 <h1>About.</h1>
                </div>
                <div className = "main">
                <h2> Xuedan ZOU (he/him/his) is currently a master student majoring in Computer Science with a concentration in Digital Arts at <a href="https://en.wikipedia.org/wiki/Dartmouth_College">Dartmouth College</a>. 
                    He has earned his B.E. in <a href="https://en.wikipedia.org/wiki/Hunan_University">Hunan University</a>, majoring 
                    in both Computer Science and 
                    Industrial Design. He is now serving as the Research Assistant at <a href="https://empower-lab.emurnane.host.dartmouth.edu/"> 
                    Empower Research Lab </a>  at Dartmouth College. His current research interest mainly lies in Human-Computer Interaction.  </h2>
                <br/>
                <h2>Personally, he is interested in most video games (real gamer since he was about 3), mangas, 
                    graphic novels and great music (like <a href="https://en.wikipedia.org/wiki/City_pop">city pop</a>)!
                     He believes he is one of the few people who is particularly interested in the city <a href="https://tokyodeep.info/">Tokyo</a>，where
                     he states can evoke a strong personal emotion and inspire his creativity. He enjoys watching 
                    <a href="https://www.youtube.com/c/lylehsaxon"> random urban walking videos in 1990s Tokyo</a> and
                    <a href="https://www.youtube.com/watch?v=qSmN4zKuq9k"> mid 80s ~ early 00s Japanese CMs</a>. 
                    He has spent over 1000 hour in a city-building game named <a href="https://store.steampowered.com/app/255710/Cities_Skylines/">Cities Skylines</a>. 
                    The rightside video shows how his city in the game merges with the reality. </h2>
                <br/>
                <h2>Fun Facts: He received his graduate school admission letters from across 5 countries and 4 continents.</h2>    

                </div>
            </div>
            <div className = "background_videos">
             <div className = "left">
                <ReactPlayer  url = {videoURL2} loop = "ture" width= "1300px" height= "1100px" volume = {0} playing/>
             </div>
             <div className = "right">
               <ReactPlayer url = {videoURL1} loop = "ture" width= "500px" height= "500px" volume = {0}  playing/>
             </div>
            </div>
        </div>
    )
}