import React from 'react';
import Data from '../../frontend_test_homepage_data.json';
import Slider from 'react-slick';
import './HeroBanner.scss';
import Image from '../Base/Image';
import PropTypes from 'prop-types';
import { calculateDate } from '../../utils/calculateDate';

const Slide = ({ coverImageUrl, username, resultTime, submissionCount, joinedCount }) => {
    const { days, hours, minutes } = calculateDate(resultTime);

    return (
        <div className='HeroSlide'>
            <div>
                <Image src={coverImageUrl}/>
            </div>
            <div className='HeroSlide-Wrapper'>
                <h2>
                    THE FIRST GAMEJAM
                </h2>
                <p className='host-text'>Hosted by {username}</p>
                <span>Starts in</span>
                <div className='Slide-Wrapper'>
                    <div className='time-text'>
                        <p className='time-number'><span className='action-number'>{days}</span><span>days</span></p>
                        <p className='time-number'><span className='action-number'>{hours}</span><span>hours</span></p>
                        <p className='time-number'><span className='action-number'>{minutes}</span><span>minutes</span></p>
                    </div>
                    <div className='action-wrapper'>
                        <p className='join-text'>
                            <span className='action-number'>{submissionCount}</span> Joined
                        </p>
                        <p className='join-text'>
                            <span className='action-number'>{joinedCount}</span>Submissions
                        </p>
                    </div>
                </div>
                <div className='HeroSlide-Button'>
                    <button>
                    JOIN NOW!
                    </button>
                </div>
            </div>
        </div>
    );
};

const HeroBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    const jams = Data.jams;

    return (
        <section className='HeroBanner'>
            <Slider {...settings}>
                {jams.map((jam, key) => {
                    const {
                        coverImageUrl, hostProfiles, resultTime, submissionCount, joinedCount
                    } = jam;

                    return (
                        <Slide
                            key={key}
                            coverImageUrl ={coverImageUrl}
                            username={hostProfiles[0].username}
                            resultTime={resultTime}
                            submissionCount={submissionCount}
                            joinedCount={joinedCount}
                        />
                    );
                })}
            </Slider>
        </section>
    );
};

Slide.propTypes = {
    coverImageUrl: PropTypes.string,
    username: PropTypes.string,
    resultTime: PropTypes.number,
    submissionCount: PropTypes.number,
    joinedCount: PropTypes.number
};

export default HeroBanner;
