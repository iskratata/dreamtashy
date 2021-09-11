import React, {useState} from 'react';
import StoryDisplay from './StoryDisplay';
import './style.css';

export default function Options(props) {
    const [display, setDisplay] = useState("options");
    const [next, setNext] = useState('');

    const info = JSON.parse(JSON.stringify(props.info));

    const one = () => {
        setNext(info.option1.next);
        setDisplay("story");
    }

    const two =() => {
        setNext(info.option2.next)
        setDisplay("story");
    }


    if (display === "options") {
        return (
            <div className='main' style={{backgroundImage: info.bg, backgroundSize: 'cover', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end'}}>
                <div className='text-box' style={{width: '500px', minHeight: '80px', marginBottom: '100px', zIndex: '99', marginLeft: '100px'}}>
                    <div className='speaker-name' style={{padding: '5px'}}>What will you do next? </div>
                    <div style={{padding: '0px 5px'}}>
                        <button className="options" onClick={ e => one(e)}>{info.option1.text}</button>
                        <button className="options" onClick={ e => two(e)}>{info.option2.text}</button>
                    </div>
                    <br />
                </div>
                <div style={{marginLeft: '-50px'}}><img src={info.tcharacter} width="300px" /></div>
            </div>
        );
    } else if (display === 'story') {
        return (
            <StoryDisplay info={next} />
        );
    }
}

