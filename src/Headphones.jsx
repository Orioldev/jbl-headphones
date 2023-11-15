import React, { useEffect, useState } from 'react';
import 'swiper/css';


import { Home } from './components/Home';
import { About } from './components/About';
import { Favorite } from './components/Favorite';
import { Model } from './components/Model';
import { Footer } from './components/Footer';
import { Sponsors } from './components/Sponsors';



export const Headphones = () => {

    const [show, setShow] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollup, setScrollup] = useState(false);

    const onShowMenu = () => {
        const showMenu = !show;
        setShow( showMenu ); 
    }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50);
      setScrollup( window.scrollY >= 450 );
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
        <header className={ `header ${ isScrolled ? 'blur-header' : '' }` } id="header">
            <nav className="nav container">
                <a href="#" className='nav__logo'>JBL</a>
                <div 
                    className="nav__menu" 
                    style={{ top: `${ show ? '0' : '-100%' }` }}
                    id="nav-menu"
                >
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className='nav__link' onClick={ () => setShow(false) }>Home</a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className='nav__link' onClick={ () => setShow(false) } >About</a>
                        </li>

                        <li className="nav__item">
                            <a href="#favorite" className='nav__link' onClick={ () => setShow(false) } >Favorites</a>
                        </li>

                        <li className="nav__item">
                            <a href="#model" className='nav__link' onClick={ () => setShow(false) } >Models</a>
                        </li>
                    </ul>

                    {/* Clase button */}
                    <div 
                        className="nav__close" 
                        id="nav-close"
                        onClick={ onShowMenu }
                    >
                        <i className='ri-close-line'></i>
                    </div>
                </div>

                {/* Toggle button */}
                <div 
                    className="nav__toggle" 
                    id="nav-toggle"
                    onClick={ onShowMenu }
                >
                    <i className='ri-menu-line'></i>
                </div>

            </nav>
        </header>

        <main className="main">
            <Home />

            <About />

            <Favorite />

            <Model />


            <Sponsors />

        </main>

            <Footer />

        {/* SCROLLUP */}

        <a href="#" 
            className={`scrollup ${ scrollup ? 'show-scroll' : '' }`} 
            style={{ display: `${ scrollup ? 'inline-flex' : 'none' }` }}
            id='scroll-up'
        >
            <i className='ri-arrow-up-5-line'></i>
        </a>

    </>
  )
}
