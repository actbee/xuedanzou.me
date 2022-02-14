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
           strings: ["A software programmer who is passionate to create something beautiful.",  
           "Right now doing the master in Digital Arts at Dartmouth College."],
       });
  },[]);  

  return (
    <div className = "intro" id = "intro">
        <div className="left">
            <div className="imgContainer">
                <img src = "assets/dan.png" alt = ""/>
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
                <h3>
                    <span ref={textRef}>
                    </span>
                </h3>
                <a href="#portfolio">
                    <img src = "assets/down1.png" alt=""/>
                </a>
            </div>
        </div>
    </div>
  )
}
