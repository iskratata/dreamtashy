import React, {useState} from 'react';
import Selection from './Selection';
import './style.css';

export default function Ending (props) {
    const [display, setDisplay] = useState("end");

    const info = JSON.parse(JSON.stringify(props.info));

    const arrowButton = () => {
        setDisplay("credits");
    }


    if (display === "end") {
        return (
            <div className='main bg1' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                <div className="centered-box">
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <center>
                        <h2>{info.text1}</h2> <br />
                        
                        {info.text2} <br />
                        {info.text3}
                        </center>
                        <button className='arrow-button' style={{marginTop: '20px'}} onClick={ e => arrowButton(e)}> ➜ </button>
                    </div>
                </div>
            </div>
        );
    } else if (display === 'credits') {
        return (
            <div className='main bg2' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                <div className="centered-box">
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <div style={{fontFamily: "'Francois One', sans-serif", fontSize: '2em'}}>CREDITS</div>
                       <center>
                            silly little game created by iskra for tasha for their birthday. <br />
                            happy birthday trasha!! <br />
                            the end.
                            <div style={{marginTop: '10px'}}><button style={{backgroundColor: '#b5e43f'}} onClick={e => setDisplay('again')} >Start Over</button></div>             
                       </center>
                    </div>
                </div>
            </div>
        );
    } else if (display === 'again') {
        return (
            <Selection />
        );
    }
}