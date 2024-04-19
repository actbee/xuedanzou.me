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
                <h2> Xuedan ZOU (he/him/his) is currently working as a software engineer at <a href="https://en.wikipedia.org/wiki/Rakuten">Rakuten Group</a> in Tokyo, Japan. Before, he has earned his M.S. in Computer Science from <a href="https://en.wikipedia.org/wiki/Dartmouth_College">Dartmouth College</a>. 
                    and his B.E. in <a href="https://en.wikipedia.org/wiki/Hunan_University">Hunan University</a>, majoring 
                    in both Computer Science and 
                    Industrial Design. During his graduate study at Dartmouth College, he explored Human-Computer Interaction as a research assistant at <a href="https://www.empowerlab.dartmouth.edu">Empower lab</a> and was advised by <a href="https://www.cs.dartmouth.edu/~lorie/About.html">Prof. Lorie Loeb </a> and <a href="https://engineering.dartmouth.edu/community/faculty/elizabeth-murnane" >Prof. Elizabeth L. Murnane</a>. 
                    </h2>
                <br/>
                <h2>Personally, he is interested in art, most video games (real gamer since he was about 3) and great music (like <a href="https://en.wikipedia.org/wiki/City_pop">city pop</a>)!
                     He believes he is one of the few people who is particularly interested in the city <a href="https://tokyodeep.info/">Tokyo</a>, where
                     he states can evoke a strong personal emotion and inspire his creativity. He enjoys watching 
                    <a href="https://www.youtube.com/c/lylehsaxon"> random urban walking videos in 1990s Tokyo</a> and
                    <a href="https://www.youtube.com/watch?v=qSmN4zKuq9k"> mid 80s ~ early 00s Japanese CMs</a>. 
                    He has spent over 1000 hour in a city-building game named <a href="https://store.steampowered.com/app/255710/Cities_Skylines/">Cities Skylines</a>. 
                    The rightside video shows how his city in the game merges with the reality. Based on his interest in Tokyo, he is now moving to Tokyo and learning Japanese.
                    He is eager to explore the possbillity of art, and open to meet new people. </h2>
                <br/>
                </div>
                <div class="arrow">
                <a href="#portfolio">
                    <img src = "assets/down1.png" alt=""/>
                </a>
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