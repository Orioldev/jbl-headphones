import React from 'react'
import { Carrusel } from './carrusel'

export const Favorite = () => {
  return (
    <section className="favorite section" id='favorite'>
                <h2 className="section__title">
                    CHOSE YOUR FAVORITE
                </h2>
                <div className="favorite__container">
                    <div className="swiper-wrapper">
                        <div className="favorite__swiper swiper">
                            <Carrusel/>
                        </div>
                    </div>
                </div>
    </section>
  )
}
