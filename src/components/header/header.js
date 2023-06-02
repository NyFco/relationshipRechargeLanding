import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';

import logo from '../../images/logo.png';

import classes from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 1200 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <img src={logo} />
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 1200 ? classes.isMenu : ''
          }`}
        >
          <ul>
            <li>
              <a href="" onClick={menuToggleHandler}>
                Topics
              </a>
            </li>
            <li>
              <a href="" onClick={menuToggleHandler}>
                How it Works
              </a>
            </li>
            <li>
              <a href="" onClick={menuToggleHandler}>
                Features
              </a>
            </li>
            <li>
              <a href="" onClick={menuToggleHandler}>
                Pricing
              </a>
            </li>
            <li>
              <a href="" onClick={menuToggleHandler}>
                FAQ
              </a>
            </li>
            <li>
              <a href="" onClick={menuToggleHandler}>
                Vision
              </a>
            </li>
          </ul>
          <button onClick={ctaClickHandler} className={classes.menuBtn}>
            GET STARTED FOR FREE
          </button>
        </nav>
        <button onClick={ctaClickHandler} className={classes.headerBtn}>
          GET STARTED FOR FREE
        </button>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
