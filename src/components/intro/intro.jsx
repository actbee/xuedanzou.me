import "./intro.scss"
import {init} from 'ityped'
import {useEffect, useRef} from 'react'


export default function Intro() {

  const textRef = useRef();  

  useEffect(()=>{
       init(textRef.current, {
           showCursor: false,
           backDelay: 1500,
           backSpeed: 50,
           showCursor: true,
           strings: ["A software programmer who is also interested in business and art.",  
           "Right now working for Rakuten Group as a software engineer.",
           "Interested in art, urban design, video games and the city TOKYO.",
           "From Fucheng, Sezchuan(涪城区，四川). Currently based in Setagaya TOKYO."],
       });
  },[]);  

  return (
    <div className = "intro" id = "intro">
        <div className="left">
            <div className="imgContainer">
                <img src = "assets/xuedan2.png" width = "350px" alt = ""/>
            </div>
        </div>
        <div className="right">
            <div className = "wrapper">
                <h2>
                    Hi! Nice to meet you! 
                    I'm
                </h2>
                <h1>
                    Xuedan ZOU
                </h1>
                <h1>
                    邹 雪丹
                </h1>
                {/*<h4>
                    Here is my <a href="assets/CV2022.pdf"> resume</a> .
                </h4>
                */}
                <h3>
                    <span ref={textRef}>
                    </span>
                </h3>
                <div class="arrow">
                <a href="#about">
                    <img src = "assets/down1.png" alt=""/>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}