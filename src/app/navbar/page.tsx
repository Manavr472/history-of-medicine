import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">Dummy Logo</div>
            <nav className="flex space-x-4">
                <a href="#home" className="hover:text-gray-400">Home</a>
                <a href="#about" className="hover:text-gray-400">About</a>
                <a href="#contact" className="hover:text-gray-400">Contact</a>
            </nav>
        </header>
    );
};

export default Header;