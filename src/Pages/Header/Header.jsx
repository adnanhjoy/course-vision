import React from 'react';
import cover from '../../assets/images/cover.avif';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Header.css';

const Header = () => {
    return (
        <div>
            <AwesomeSlider>
                <div className="hero min-h-full bg-base-200 header-bg">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={cover} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="hero min-h-full bg-base-200 header-bg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={cover} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            </AwesomeSlider>
        </div>
    );
};

export default Header;