import React from 'react';
import preloader from '../assets/img/logo/preloader.png';

const Preloader = () => {
    return (
        <div id="preloader">
            <div id="loader" className="loader">
                <div className="loader-container">
                    <div className="loader-icon">
                        <img src={preloader} alt="preloader" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;