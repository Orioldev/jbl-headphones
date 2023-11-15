import React from 'react'
import ModelImg from '../img/model-img.png'
import Tooltip from '../img/tooltip-right.svg'

export const Model = () => {
  return (
        <section className="model section" id='model'>
                <h2 className="section__title">
                    MODEL SPECIFICATION
                </h2>

                <div className="model__content">

        
                      <div className="model__container container grid">
                        <div className="model__content">
                        <img src={ ModelImg } alt="image" className="model__img" />

                        <div className="model__tooltip model__tooltip-1">
                            <img src={ Tooltip } alt="tooltip"  className='model__tooltip-img' />
                            <span className='model__tooltip-text'>Best Comfort</span>
                        </div>

                        <div className="model__tooltip model__tooltip-2">
                            <img src={ Tooltip } alt="tooltip"  className='model__tooltip-img' />
                            <span className='model__tooltip-text'>Easy Adjustment</span>
                        </div>

                        <div className="model__tooltip model__tooltip-3">
                            <img src={ Tooltip } alt="tooltip"  className='model__tooltip-img' />
                            <span className='model__tooltip-text'>Fast Charge</span>
                        </div>

                        <div className="model__tooltip model__tooltip-4">
                            <img src={ Tooltip } alt="tooltip"  className='model__tooltip-img' />
                            <span className='model__tooltip-text'>Custom Audio</span>
                        </div>
                      </div>

                       <div className='button-container'>
                        <a href="#" className="model__button button">
                            Buy Now <i className='ri-play-circle-fill'></i>
                        </a>
                       </div> 
                    </div>
                </div>
            </section>
  )
}
