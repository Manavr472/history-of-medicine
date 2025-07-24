import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='relative mt-20' style={{ padding: '20px', textAlign: 'center'}}>
            <hr/>
            <br />
            <p>&copy; 2025 History Of Medicine. All rights reserved.</p>
            <nav>
                <a href="/privacy_policy" style={{ margin: '0 10px' }}>Privacy Policy</a>
                <a href="/terms_of_service" style={{ margin: '0 10px' }}>Terms of Service</a>
                <a href="/disclaimer" style={{ margin: '0 10px' }}>Disclaimer</a>
            </nav>
        </footer>
    );
};

export default Footer;