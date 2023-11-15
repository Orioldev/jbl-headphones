import React from 'react'

export const Footer = () => {
  return (
    <footer className='footer'>
            <div className="footer__container container grid">
                <div>
                    <a href="#" className='footer__logo'>JBL</a>
                </div>

                <div className="footer__data grid">
                    <div>
                        <h3 className="footer__title">Products</h3>
                        <ul className="footer__links">
                            <li>
                                <a href="#" className='footer__link' >Headphones</a>
                            </li>
                            <li>
                                <a href="#" className='footer__link' >Earphones</a>
                            </li>
                            <li>
                                <a href="#" className='footer__link' >Earbuds</a>
                            </li>
                            <li>
                                <a href="#" className='footer__link' >Accesories</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__title">Support</h3>
                        <ul className="footer__links">
                            <li>
                                <a href="#" className='footer__link' >Product Help</a>
                            </li>
                            <li>
                                <a href="#" className='footer__link' >Register</a>
                            </li>
                            <li>
                                <a href="#" className='footer__link' >Updates</a>
                            </li>
                            <li>
                                <a href="#" className='footer__link' >Provides</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__group">
                        <form className="footer__form">
                            <input type="email" placeholder='email' className='footer__input' />
                            <button className='footer__button button'>
                                Subscribe <i className='ri-send-plane-fill'></i>
                            </button>
                        </form>

                        <div className="footer__social">
                            <a href="#" target='_blank' className="footer__social-link">
                                <i className='ri-instagram-fill'></i>
                            </a>

                            <a href="#" target='_blank' className="footer__social-link">
                                <i className='ri-facebook-circle-fill'></i>  
                            </a>

                            <a href="#" target='_blank' className="footer__social-link">
                                <i className='ri-youtube-fill'></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <span className="footer__copy">
                &#169; All Rights Reserved By Bedimcode & Juberson Jules
            </span>
        </footer>
  )
}
