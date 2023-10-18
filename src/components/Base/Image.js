import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlaceHolder from '../../assets/images/placeholder.png';
import ImageLoader from './ImageLoader';
import './Image.scss';

const Image = ({ src, ratio = 'none' }) => {
    const imageSrc = src || PlaceHolder;
    const [loaded, setLoaded] = useState(false);

    return (
        <div>
            {loaded ? null : <ImageLoader/>}
            <img
                style={{ aspectRatio: ratio }}
                src={imageSrc}
                onLoad={() => setLoaded(true)}
                className={`Image ${loaded ? '' : 'Image-Loading'}`}
            />
        </div>
    );
};

Image.propTypes = {
    src: PropTypes.string,
    ratio: PropTypes.string
};

export default Image;
