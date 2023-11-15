import React from 'react'
import Apple from '../img/apple.png';
import Spotify from '../img/spotify.png';
import Amazon from '../img/amazon.png';
import Youtube from '../img/youtube.png';

export const Sponsors = () => {
  return (
    <section className="sponsor section">
                <div className="sponsor__container container grid">
                    <img src={ Apple } alt="sponsor" className='sponsor__img' />
                    <img src={ Spotify } alt="sponsor" className='sponsor__img' />
                    <img src={ Amazon } alt="sponsor" className='sponsor__img' />
                    <img src={ Youtube } alt="sponsor" className='sponsor__img' />
                </div>
     </section>
  )
}
