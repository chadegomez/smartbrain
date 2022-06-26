import React from "react";
import './Logo.css';
import brain from './smartbrainlogo.png';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
    return (
        <div className=" center ma4 mt0">
            <Tilt
                className="Tilt center br3 shadow-2"
                options={{max: 55}}
                style={{height: '150px', width: '150px'}}
            >
                <div className="Tilt-inner pa4">
                    <img src={brain} alt='brain' />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;