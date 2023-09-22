import React from 'react';
import PropTypes from 'prop-types';
import PlaceHolder from '../../assets/images/placeholder.png';

const Image = ({ src, ratio = 'none' }) => {
    const imageSrc = src || PlaceHolder;

    return (
        <img src={imageSrc} style={{ aspectRatio: ratio }} className='Image'/>
    );
};

Image.propTypes = {
    src: PropTypes.string,
    ratio: PropTypes.string
};

export default Image;
