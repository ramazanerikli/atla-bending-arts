import React from 'react';
import Zuko from '../images/zuko.png';

const Fire = () => (
    <div className="row context">
        <div className="column-visual">
            <img src={Zuko} alt="Katara" className="character-image" />
        </div>
        <div className="column-text">
            <h2 className="title"><span>Fire</span>bending</h2>
            <p className="description">
            Firebending, one of the four elemental bending arts, is the pyrokinetic ability to control fire. It is unique among the bending arts, as it is the only one in which the performer can spontaneously generate the element. While the first human firebenders were the Sun Warriors, it has since spread to the people of the Fire Nation, and the United Republic of Nations.
            </p>
        </div>
    </div>
);

export default Fire;