import React from 'react';
import Data from '../../frontend_test_homepage_data.json';
import './GameCards.scss';
import Image from '../Base/Image';
import PropTypes from 'prop-types';
import { calculateDate, getPercentage } from '../../utils/calculateDate';
import { useCheckMobile } from '../../hooks/useWindowDimensions';
import Slider from 'react-slick';

const FeaturedJam = ({ thumbnailImageUrl, name, username, submissionCount, joinedCount, startTime, endTime }) => {
    const { days, hours } = calculateDate(endTime);
    const timePercentage = `${getPercentage(startTime, endTime) + '%'}`;

    return (
        <div className='FeaturedJam'>
            <Image src={thumbnailImageUrl} ratio='5 / 3'></Image>
            <div className='GameCard-Content'>
                <div className='FeaturedJam-Action'>
                    <h3>{name}</h3>
                </div>
                <p className='host-text'>Hosted by {username}</p>
                <p className='action-text'>Start in {days} days, {hours} hours</p>
                <div className="progress-bar-container">
                    <div className="progress-bar-indicator" style={{ width: timePercentage }}></div>
                </div>
                <p className='action-text'>{joinedCount} Joined {submissionCount} Submissions</p>
            </div>
        </div>
    );
};

const GameCard = ({ thumbnailImageUrl, name, price, genre, description }) => {
    return (
        <div className='GameCard'>
            <Image src={thumbnailImageUrl} ratio='1'></Image>
            <div className='GameCard-Content'>
                <div className='GameCard-Action'>
                    <h3>{name}</h3>
                    <p className='GameCard-Price'>${price}</p>
                </div>
                <p className='host-text'>#{genre}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

const GameCards = ({ isJam }) => {
    const gameCards = Data.games;
    const featuredJams = Data.featuredJams;
    const isMobile = useCheckMobile();
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile ? 1.2 : 3,
        slidesToScroll: 1,
        arrows: false
    };

    if (isJam) {
        return (
            <section className='GameCards'>
                <h3>Featured Jams</h3>
                <div className='GameCards-Wrapper'>
                    <Slider {...settings}>
                        {featuredJams.map(jam => {
                            const {
                                thumbnailImageUrl,
                                price,
                                hostProfiles,
                                name,
                                resultTime,
                                submissionCount,
                                joinedCount,
                                startTime,
                                endTime
                            } = jam;

                            return (
                                <FeaturedJam
                                    key={jam.name}
                                    thumbnailImageUrl={thumbnailImageUrl}
                                    submissionCount={submissionCount}
                                    price={price}
                                    username={hostProfiles[0].username}
                                    name={name}
                                    resultTime={resultTime}
                                    joinedCount={joinedCount}
                                    endTime={endTime}
                                    startTime={startTime}
                                >
                                </FeaturedJam>);
                        }
                        )}
                    </Slider>
                </div>
                <button>
                    View More
                </button>
            </section>
        );
    }

    return (
        <section className='GameCards'>
            <h3>Featured Games</h3>
            <div className='GameCards-Wrapper'>
                <Slider {...settings}>
                    {gameCards.map(card => {
                        const {
                            thumbnailImageUrl, genre, price, description, name
                        } = card;

                        return (
                            <GameCard
                                key={card.name}
                                thumbnailImageUrl={thumbnailImageUrl}
                                genre={genre}
                                price={price}
                                description={description}
                                name={name}
                            >
                            </GameCard>);
                    }
                    )}
                </Slider>
            </div>
            <button>
                View More
            </button>
        </section>
    );
};

FeaturedJam.propTypes = {
    thumbnailImageUrl: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
    submissionCount: PropTypes.number,
    resultTime: PropTypes.number,
    joinedCount: PropTypes.number,
    startTime: PropTypes.number,
    endTime: PropTypes.number
};

GameCard.propTypes = {
    thumbnailImageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    genre: PropTypes.string,
    description: PropTypes.string
};

GameCards.propTypes = {
    isJam: PropTypes.bool
};

export default GameCards;
