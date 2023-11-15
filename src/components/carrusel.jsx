import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Favorite1 from '../img/favorite-1.png'
import Favorite2 from '../img/favorite-2.png'
import Favorite3 from '../img/favorite-3.png'
import Favorite4 from '../img/favorite-4.png'


export const Carrusel = () => {
  const slides = [
    {
      src: Favorite1,
      alt: 'favorite',
      model: 'Black Model',
    },
    {
      src: Favorite2,
      alt: 'favorite',
      model: 'White Model',
    },
    {
      src: Favorite3,
      alt: 'favorite',
      model: 'Red Model',
    },
    {
      src: Favorite4,
      alt: 'favorite',
      model: 'Teal Model',
    },
  ];

  return (
    <Swiper 
        slides={slides} 
        navigation={false} 
        pagination={false}
        centeredSlides={true}
        breakpoints={{ 768: {
            centeredSlides: true,
          }}}
        slidesPerView={3}
        loop={ true }
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} className='favorite__article'>
          <img src={slide.src} alt={slide.alt} className='favorite__img' />
          <span className='favorite__model'>{slide.model}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
