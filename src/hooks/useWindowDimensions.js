import { useEffect, useState } from 'react';

export const useCheckMobile = () => {
    const [isMobile, setIsMobile] = useState(window && window.innerWidth < 768);

    useEffect(() => {
        if(!window) {
            return;
        }

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
};
