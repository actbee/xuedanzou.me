import "./portfolio.scss"
import PortfolioList from "../portfolioList/portfolioList";
import {useEffect, useState} from "react";
import { 
    featuredPortfolio, 
    codePortfolio, 
    designPortfolio,
    daPortfolio,
    } from "../../data";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "code",
            title: "Code",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "digital arts",
            title: "Digital Arts",
        },

    ];

    useEffect(()=>{

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;

            case "code":
                setData(codePortfolio);
                break;

            case "design":
                setData(designPortfolio);
                break;

            case "digital arts":
                setData(daPortfolio);
                break;
        }

    }, [selected])

  return (
    <div className = "portfolio" id = "portfolio">
        <h1>Portfolio</h1>
        <ul>
           {list.map(item=>(
               <PortfolioList 
               title={item.title} 
               active = {selected === item.id}
               setSelected = {setSelected}
               id = {item.id}
               />
           ))}
        </ul>
        <div className="container">
            {data.map(d=>(

            <div className="item">
                <a href = {d.link}>
                <img 
                 src={d.img}
                 alt=""
                 />
                 </a>
                 
                <h3>{d.title}</h3>
            </div>
                     ))}
            </div>
        </div>
  );
}
