import React from 'react';
import PropTypes from 'prop-types';

export const LoaderCircle = () => {
    return <li></li>;
};

const ImageLoader = ({ styles }) => {
    return (
        <ul className='LoaderCircle'>
            <LoaderCircle />
            <LoaderCircle />
            <LoaderCircle />
        </ul>
    );
};

ImageLoader.propTypes = {
    styles: PropTypes.object
};

export default ImageLoader;
