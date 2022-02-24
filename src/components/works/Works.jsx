import "./works.scss"
import {useState} from 'react';
export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleSlide = (dir)=>{
        dir === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1:2):
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 :0);
    }
    const data = [
        {
            id:1,
            img:"assets/insure.png",
            title:"Insure Landing Page",
            des:"Lorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem lorem",
        },
        {
            id:2,
            img:"assets/shooter.png",
            title:"JavaScript Shooter Game",
            des:"Lorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem lorem",
        },
        {
            id:3,
            img:"assets/translator.png",
            title:"Minion Translator",
            des:"Lorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem lorem",
        }
    ]
    return (
        <div className = "works" id = "works">
            <div className = "slider" style={{transform : `translateX(-${currentSlide*100}vw)`}}>
                {data.map((d)=>(
                    <div className = "container">
                        <div className = "item">
                            <div className = "left">
                                <div className = "leftContainer">
                                    <div className = "imgContainer">
                                        <img src = "assets/web.png" alt = "" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.des}</p>
                                    <span>Project</span>
                                </div>
                            </div>
                            <div className = "right">
                                <div className="imgContainer">
                                    <img src = {d.img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            
            <img src = "assets/right-arrow.png" className="arrow Right" alt = "" onClick={()=>handleSlide("right")}/>
            <img src = "assets/left-arrow.png" className="arrow Left" alt = "" onClick={()=>handleSlide("left")} />
        </div>
    )
}
