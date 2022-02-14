import "./topbar.scss"
import {Mail, LocalPhone} from "@material-ui/icons"

export default function topbar({menuOpen, setMenuOpen}) {
  return (
    <div className = {"topbar " + (menuOpen && "active")}>
        <div className = "wrapper">
            <div className = "left">
               <a href = "#intro" className = "logo">
                    ZOU.
               </a>
               <div className = "itemContainer">
                   <LocalPhone className = "icon"/>
                   <span>+1 603 349 0165</span>
               </div>
               <div className = "itemContainer">
                   <Mail className = "icon"/>
                   <span>xuedan.zou.gr@dartmouth.edu</span>
               </div>

            </div>
            <div className = "right">
                   <div className = "hamburger" onClick = {()=>setMenuOpen(!menuOpen)}>
                       <span className = "line1"></span>
                       <span className = "line2"></span>
                       <span className = "line3"></span>
                   </div>
            </div>
        </div>
    </div>
  )
}

