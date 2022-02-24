import PortfolioList from "../portfolioList/PortfolioList";
import {useState, useEffect} from "react";
import "./portfolio.scss";
import {featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    //These below list is for the tabs which we have made on portfolio page
    const list = [
        {
            id: "featured",
            title: "Featured",
          },
          {
            id: "web",
            title: "Web App",
          },
          {
            id: "mobile",
            title: "Mobile App",
          },
          {
            id: "design",
            title: "Design",
          },
          {
            id: "content",
            title: "Content",
          },
    ];
    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
                break;
        }
    },[selected])
    return (
        <div className = "portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    //selected === item.id means that whichever item would be clicked it would be stored in selected and then it would be matched against all the ids
                    <PortfolioList title = {item.title} active = {selected === item.id} setSelected = {setSelected} id = {item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className = "item">
                        <img
                            src = {d.img}
                            alt = ""
                        ></img>
                        <h3>{d.title}</h3>
                    </div>
                ))}
                
            </div>
        </div>
    )
}
