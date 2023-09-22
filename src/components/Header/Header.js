import React, { useEffect, useState } from 'react';
import './Header.scss';

const useScrollDirection = () => {
    const [show, setShow] = useState('show');

    useEffect(() => {
        let previousScrollPosition = 0;
        let currentScrollPosition = 0;

        window.addEventListener('scroll', function (e) {
            // Get the new Value
            currentScrollPosition = window.pageYOffset;

            // Subtract the two and conclude
            if (previousScrollPosition - currentScrollPosition < 0) {
                setShow('hide');
            } else if (previousScrollPosition - currentScrollPosition > 0 && currentScrollPosition > 40) {
                setShow('mini');
            } else if (previousScrollPosition - currentScrollPosition > 0) {
                setShow('show');
            }

            // Update the previous value
            previousScrollPosition = currentScrollPosition;
        });
    }, []);

    return show;
};

const Header = () => {
    const scrollDirection = useScrollDirection();

    return (
        <header className={`${scrollDirection}`}>
            <div>
                <div className='Header-Logo'>GAMEJAM</div>
                <p>BROWSE GAMES</p>
            </div>
            <div className='Header-Tabs'>
                <p>UPLOAD GAMES</p>
                <p>COMMUNITY</p>
                <p>SUPPORT</p>
            </div>
            <div className='Header-Login'>
                <p>Sign up</p>
                <p>Log in</p>
            </div>
        </header>
    );
};

export default Header;
