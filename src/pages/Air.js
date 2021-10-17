import React from 'react';
import Aang from '../images/aang.png';

const Air = () => (
    <div className="row context">
        <div className="column-visual">
            <img src={Aang} alt="Aang" className="character-image" />
        </div>
        <div className="column-text">
            <h2 className="title"><span>Air</span>bending</h2>
            <p className="description">
            Airbending, one of the four elemental bending arts, is the aerokinetic ability to control and manipulate currents of air. The peaceful Air Nomads utilize this type of bending in their everyday lives.

            Air is the element of freedom. The Air Nomads detach themselves from worldly problems and concerns; finding peace and freedom is the key to solving their difficulties in life. 
            </p>
        </div>
    </div>
);

export default Air;