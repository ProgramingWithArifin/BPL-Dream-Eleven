import React from 'react';
import bgShadow from '../../assets/bg-shadow.png';
import bgImg from '../../assets/banner-main.png';
const Hero = () => {
    return (

        <div className='w-11/12 mx-auto bg-black rounded-lg'>
            <div className="hero min-h-screen bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: `url(${bgShadow})` }}>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <img src={bgImg} alt="Background" className="mb-5 rounded-lg mx-auto" />
                        <h1 className="mb-5 text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5 opacity-80">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <button className="btn btn-warning text-black font-bold">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;