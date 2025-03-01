import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='relative mt-20' style={{ padding: '20px', textAlign: 'center'}}>
            <hr/>
            <br />
            <p>&copy; 2024 Itihasa XR. All rights reserved.</p>
            <nav>
                <a href="/privacy-policy" style={{ margin: '0 10px' }}>Privacy Policy</a>
                <a href="/terms-of-service" style={{ margin: '0 10px' }}>Terms of Service</a>
                <a href="/contact-us" style={{ margin: '0 10px' }}>Contact Us</a>
            </nav>
        </footer>
    );
};

export default Footer;