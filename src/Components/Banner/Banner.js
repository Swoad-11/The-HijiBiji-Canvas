import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../images/Bean.png'
import banner2 from '../../images/img3.jpg'
import banner3 from '../../images/img6.jpg'
import banner4 from '../../images/img1.jpg'
import banner5 from '../../images/img2.jpg'

const Banner = () => {
    return (
        <div>
            <h3 className='text-center description'>Some of Our Works</h3>
            <Carousel fade variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src={banner4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src={banner5}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;