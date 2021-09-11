import React, {useState} from 'react';
import Choose from './Choose';
import './style.css';

export default function Selection(props) {
    const [name, setName] = useState('User');
    const [display, setDisplay] = useState('start');
   
    const changeUsername = (event, value) => {
        setName(value);
      }
    
    const handleEnter = (event) => {
        if (event.key === "Enter") {
            setDisplay('select');
        }
    }
    
    if (display === 'start') {
        return (
            <div className="main" style={{backgroundImage: 'url("/images/opening.jpg")', backgroundSize: 'cover', color: '#ffffff'}}>
                <div style={{padding: '75px 0 0 65px'}}><img src='/images/dreamtashylogo.png' width='350px'/>
                </div>
                <br />
                <div style={{marginLeft: '140px'}}>
                    <button style={{fontSize: '2em', backgroundColor: 'rgba(252, 98, 150, 0.8)', border: '#fff solid 3px' }} onClick={ e => setDisplay('name')}>PLAY NOW</button><br />
                </div>
                <div style={{margin: '20px 50px 20px 50px', fontSize: '0.7em', backgroundColor: 'rgba(173, 109, 212, 0.4)'}}>
                    *disclaimer: so I was gonna do this last year for your birthday, but my deteriorating mental health got in the way so you get this a year later. sorry. 
                    I have no concept of the passage of time, and when time finally caught up to me, I only had a week to put this together oopsies my bad. so it's very bare bones. 
                    nothing as complex as I really wanted to do :( sorry the art isnt the greatest. also i have no concept of lighting and perspective, so in this universe it doesn't exist. also i'm not great at writing storylines.
                    Anyway, have fun dating yourself
                </div>
            </div>
        );
    } else if (display === 'name') {
        return (
            <div className="main bg1" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="centered-box">
                        <h2>Set Your Character's Name: </h2><br />
                        <div style={{alignItems: 'baseline'}}>
                            <input  
                                type="text" 
                                placeholder="Enter Name"
                                onChange={(event) => changeUsername(event, event.target.value)}
                                onKeyPress={e => handleEnter(e)}
                            />
                            <button onClick={ e => setDisplay('select')}>Next</button>                               
                        </div>
                
                </div>

            </div>
        );
    } else if (display === 'select') {
        return(
            <Choose name={name} />
        );
    }
} 


/* 
    first before going into main storyline, do short storyline first as introductory to characters, 
    then goes into select which character to romance screen 
*/