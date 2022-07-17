import React from 'react';
import { useState } from 'react';
import ToggleButton from './toggle_button'; 
import LinkedButton from './linked_button';
import ExpandButton from './expand_button';
import MusicButton from './music_button';
import './legit.css';
import Dropdown from './dropdown';

    
function SidePanel() {

    const [customURL, setCustomURL] = useState("https://www.youtube.com/watch?v=KYwA5k00p2I");

    const changeCustomURL = (newURL) => {
        setCustomURL(newURL);
    }
    return (
        <div className="fixed-top py-5 panel bg-white shadow-lg">
            {/*<LinkedButton className="btn btn-lg m-1 shadow-lg" url="https://www.spotify.com/" text={spotify} />*/}
            <div className="row justify-content-center">
                <LinkedButton className="btn btn-lg m-1 my-2 shadow-lg" url="/" text={<i className="material-symbols-outlined">home</i>} />
                <ExpandButton className="my-2" text={<i className="material-symbols-outlined">open_in_full</i>} />
            </div>
            <div className="row justify-content-center">
                <ToggleButton audioFile="images/rain-01.mp3" className="my-2" text={<i className="material-symbols-outlined">rainy</i>}/>
                <MusicButton audioUrl="https://www.youtube.com/watch?v=OowUi602GdU&ab_channel=ILoveYouVenice" text={<i className="material-symbols-outlined">piano</i>}/>
            </div>
            <div className="row justify-content-center">
                <ToggleButton audioFile="images/campfire-1.mp3" className="my-2" text={<i className="material-symbols-outlined">local_fire_department</i>}/>
                <MusicButton audioUrl="https://www.youtube.com/watch?v=YH-kF2Nyz7U&ab_channel=RelaxCafeMusic" text={<i className="material-symbols-outlined">music_note</i>}/>
            </div>
            <div className="row justify-content-center">
                <ToggleButton audioFile="images/wind-howl-01.mp3" className="my-2" text={<i className="material-symbols-outlined">air</i>} />
                <MusicButton audioUrl="https://www.youtube.com/watch?v=ceqgwo7U28Y&ab_channel=thebootlegboy2" text={<i className="material-symbols-outlined">radio</i>}/>
            </div>
            <div className="row justify-content-center">
                <ToggleButton audioFile="images/white-noise-01.mp3" className="my-2" text={<i className="material-symbols-outlined">dark_mode</i>} />
                <MusicButton audioUrl={customURL} text={<i className="material-symbols-outlined">play_arrow</i>}/>
            </div>
            <div className="row justify-content-center">
                <Dropdown onSelect={changeCustomURL} />
            </div>
        </div>
    );

        
}

    
export default SidePanel;
