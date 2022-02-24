import "./intro.scss"
import {init} from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        console.log(textRef);
        init(textRef.current,{
            showCursor: true, 
            backSpeed:60,
            backDelay:70,
            strings: ['Frontend Developer', 'UI Designer', 'Content Creator'] 
        });
    }, [])
    return (
        <div className = "intro" id = "intro">
            <div className="left">
                <div className = "wrapper">
                    <h1>Rishabh Pagaria</h1>
                    <h2>He is a Developer who develops websites and also designs the UI, also learning the backend and understanding the concepts of web 3. Apart from this he also do photography and write blogs in his leisure time. </h2>
                    <h3>I'm a <span ref={textRef}></span></h3>
                </div>
            </div>
            <div className="circle"></div>
            <div className="right">
                <div className = "imgContainer">
                    <img src="assets/main.png" alt="main image"></img>
                </div>
            </div>
        </div>
    )
}
