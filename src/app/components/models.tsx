import React from 'react';
import '../assets/style.css';

const UnityPage: React.FC = () => {
    return (
        <div className='container justify-center items-center mt-20 text-center mx-auto'>
            <h2 className="text-4xl font-bold mb-4">Explore Our Models</h2>
            <p className="text-lg mb-6">Discover the fascinating 3D representations of medical implants.</p>
            <div id="unity-mobile" className="container flex justify-center items-center mx-auto">
                <iframe 
                src="https://manavr472.github.io/webgl-itihasaxr/"
                className='w-full h-screen' 
                />
            </div>
        </div>
    );
};

export default UnityPage;
