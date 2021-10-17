import React from 'react';
import Toph from '../images/toph.png';

const Earth = () => (
    <div className="row context">
        <div className="column-visual">
            <img src={Toph} alt="Toph" className="character-image" />
        </div>
        <div className="column-text">
            <h2 className="title"><span>Earth</span>bending</h2>
            <p className="description">
            Earthbending, one of the four elemental bending arts, is the geokinetic ability to manipulate earth and rock in all their various forms. It is utilized by people of the Earth Kingdom and the Imperial City.

            Earth is the element of substance, making earthbenders and their people diverse, strong, persistent, and enduring. The first earthbenders, Oma and Shu, learned the art from badgermoles.
            </p>
        </div>
    </div>
);

export default Earth;