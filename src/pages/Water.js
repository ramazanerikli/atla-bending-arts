import React from 'react';
import Katara from '../images/katara.png';

const Water = () => { 

    return ( 
    <div className="row context">
        <div className="column-visual">
            <img src={Katara} alt="Katara" className="character-image" />
        </div>
        <div className="column-text">
            <h2 className="title"><span>Water</span>bending</h2>
            <p className="description">
                Waterbending, one of the four elemental bending arts, is the hydrokinetic ability to control water, as well as its many forms. This type of bending is utilized by the people of the Water Tribe, who are divided into the Southern, Northern, 
                and lesser known Foggy Swamp tribes, as well as those of Imperial City, each with their own unique bending style.
            </p>
        </div>
    </div>
    )
    };
    

export default Water;