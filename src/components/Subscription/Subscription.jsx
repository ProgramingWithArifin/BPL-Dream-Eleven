import React from 'react';
import bgShadow from '../../assets/bg-shadow.png';
const Subscription = () => {
    return (
        <div className='mt-20'>
            <div className='relative top-30 w-11/12 mx-auto bg-white rounded-lg shadow-lg'>
                <div className="p-10 bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: `url(${bgShadow})` }}>
                    <div className="hero-content text-neutral-content text-center">
                        <div>
                            <h1 className="mb-5 text-3xl font-bold text-black ">Subscribe to our Newsletter</h1>
                            <p className="mb-5 opacity-80 text-black">
                                Get the latest updates and news right in your inbox!
                            </p>
                            <div className='flex gap-3'>
                                <input type="text" placeholder="Type here" className="input bg-white text-black border-2 border-gray-300" />
                                <button className="btn bg-linear-to-br from-pink-600 to-yellow-500 text-white border-none">Subscribe</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;