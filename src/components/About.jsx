import React from 'react'
import AboutImg from '../img/about-img.png'

export const About = () => {
  return (
        <section className="about" id='about'>
                <div className="about__container container grid">
                    <div className="about__data">
                        <h2 className="section__title">
                            More ABOUT US
                        </h2>

                        <p className="about__description">
                            Enjoy award-winning JBL sound with
                            wireless listening freedom and a sleek,
                            streanLined design with confortable
                            cushioned earcups that deliver premiun playback
                            for the user.
                        </p>

                        <a href="#" className='button'>
                            Know More <i className='ri-information-fill'></i>
                        </a>
                    </div>
                    <img src={ AboutImg } alt="image" className='about__img' />
                </div>
            </section>
  )
}
