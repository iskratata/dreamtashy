import React, {useState} from 'react';
import Selection from './Selection';
import './style.css';

export default function FirstScene (props) {

    if (props.scene === 'kpop') {
        return(
            <div>
                <center>
                    <h2>You've chosen jimins_sexy_nostril_0508!</h2><br />
                    <div>You decide to spend your day checking out the cute little record store in town to see what they have.</div>
                </center>
            </div>
        );
    } else if (props.scene === 'plant') {
        return(
            <div>
                <center>
                    <h2>You've chosen Tahsiana!</h2><br />
                    <div>It's a lovely day. You decide to take a nice walk through the park. However, you find yourself lost and disoriented.</div>
                </center>
            </div>
        );
    } else if (props.scene === 'cat') {
        return(
            <div>
                <center>
                    <h2>You've chosen Tabbysha Donkmeow!</h2><br />
                    <div>A new cat cafe just opened up downtown. You decide to spend a relaxing day there. *Sorry, this was the last one I worked on so the art is kinda shit</div>
                </center>
            </div>
        );
    } else if (props.scene === 'fashion') {
        return(
            <div>
                <center>
                    <h2>You've chosen Abena!</h2><br />
                    <div>Today's your first day at your new internship at the super fancy successful fashion label, Donkoh by Abena. You can't wait to meet everyone!</div>
                </center>
            </div>
        );
    }
}