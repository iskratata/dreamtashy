import React, {useState} from 'react';
import StoryDisplay from './StoryDisplay';
import './style.css';

export default function TashyTips(props) {
    const [display, setDisplay] = useState("tashtip");

    const info = JSON.parse(JSON.stringify(props.info));

    const arrowButton = () => {
        setDisplay("story");
    }


    if (display === "tashtip") {
        return (
            <div className='main bg2' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                <div className="centered-box">
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <div style={{fontFamily: "'Francois One', sans-serif", fontSize: '2em'}}>Tash Tip #{info.num}</div>
                        <center>{info.tip} </center><br />
                        <button className='arrow-button' style={{marginTop: '20px'}} onClick={ e => arrowButton(e)}> ➜ </button>
                    </div>
                </div>
            </div>
        );
    } else if (display === 'story') {
        return (
            <StoryDisplay info={info.nextpart} />
        );
    }
}

