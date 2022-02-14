import "./contact.scss";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className = "contact" id = "contact">
      <div className = "left">
        <ul>
         <li>
           <a href = "https://www.linkedin.com/in/xuedan-zou-4386aa153/">Linkedin</a>
           </li>
           <li>
           <a href = "https://www.instagram.com/actbee40/">Instagram</a>
           </li>
           <li>
           <a href = "https://github.com/actbee">Github</a>
           </li>
           </ul>
      </div>
      <div className = "right">
        <h2> Contact.</h2>
        <form onSubmit = {handleSubmit}> 
          <input type = "next" placeholder="Email"/>
          <textarea placeholder = "Message"></textarea>
          <button type = "submit">Send</button>
          {message && <span>Thank you for your message!</span>}
        </form>
        </div>
        </div>
  )
}