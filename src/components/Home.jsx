import React from 'react';
import HomeImg from '../img/home-img.png'
import Tooltip from '../img/tooltip-right.svg'


export const Home = () => {
  return (
    <section className="home" id='home'>
                <div className="home__container container">
                    <div className="home__content">
                        <img src={ HomeImg } alt="image" className='home__img'/>
                        <h1 className="home__title">
                            <span>J</span>
                            <span>B</span>
                            <span>L</span>
                        </h1>
                        <div className="home__tooltip">
                            <img src={ Tooltip } alt="tooltip" className="home__tooltip-img" />
                            <span className="home__tooltip-text">$150</span>
                        </div>
                    </div>

                    <div className="button-container">
                        <a href="#" className='home__button button'>
                            Buy Now<i className='ri-play-circle-fill'></i>
                        </a>
                    </div>
                    
                    <div className="home__social">
                            <span className='home__social-text'>Follow Us</span>
                        <div className="home__social-links">
                            <a href="#" target='_blank' className="home__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>

                            <a href="#" target='_blank' className="home__social-link">
                                <i className="ri-facebook-circle-line"></i>                     
                            </a>

                            <a href="#" target='_blank' className="home__social-link">
                                <i className='ri-youtube-fill'></i>   
                            </a>
                        </div>
                    </div>
                    
                </div>
            </section>
  )
}
