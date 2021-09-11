import React, {useEffect, useState} from 'react';
import TashyTips from './TashyTips';
import Options from './Options';
import Ending from './Ending';

export default function StoryDisplay(props) {
    const [display, setDisplay] = useState('story');
    const [count, setCount] = useState(0);

    //storyline array
    const info = JSON.parse(JSON.stringify(props.info));

    const typing = (x) => {
        return x;
    }

    if (info[count].display === 'story') {
        return (
            <div className='main' style={{backgroundImage: info[count].bg, backgroundSize: 'cover', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end'}}>
                <div className='text-box' style={{width: '500px', minHeight: '80px', marginBottom: '100px', zIndex: '99', marginLeft: '100px'}}>
                    <div className='speaker-name' style={{padding: '5px'}}>{info[count].dialogue.username}</div>
                    <div style={{padding: '0px 5px'}}>{info[count].dialogue.words.split("").map(typing)}</div>
                    <button className='arrow-button' style={{marginBottom: '-30px', marginLeft: '420px'}} onClick={ e => setCount(count+1)}> ➜ </button>
                </div>
                <div style={{marginLeft: '-50px'}}><img src={info[count].tcharacter} width="300px" /></div>
            </div>
        );
    } else if (info[count].display === 'tashtip') {
        return (
                <TashyTips info={info[count]}/>
        );
    } else if (info[count].display === 'options') {
        return (
            <Options info={info[count]}/>
        );
    } else if (info[count].display === 'end') {
        return (
                <Ending info={info[count]}/>
        );
    }
}

/* 
    use state to differentiate between scenes and tasha tips and selection screens and end screen (which will move to next component), 
        use if/else statemetns to differentiate between displays, make it kinda meta???, like self-reference component??
    use second + third count states to get [1][3][0] array position
    or do i move parts of the array into components?
    this component would have to accept array as props to turn into reusable component


    Tashas:
    - Abena: fashion designer -headpiece
    - Tabysha Donkmeow: cat parent - fairy buns
    - jimins_beautiful_nostril_0508: kpop fan - headband
    - Tahsiana: plant fairy/deity, beekeeper -braids
*/