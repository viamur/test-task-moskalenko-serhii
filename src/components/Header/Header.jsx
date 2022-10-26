import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import Container from '../Container/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import s from './Header.module.scss';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const mob = useMediaQuery({ query: '(max-width: 767.5px)' });
  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrap}>
          <Link
            activeClass="active-link"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={s.logo}
          >
            <h3 className={s.logo__text}>armChair</h3>
          </Link>
          {mob ? (
            <>
              <IconButton aria-label="mob-menu" size="small" onClick={() => setMenuIsOpen(true)}>
                <MenuIcon />
              </IconButton>
              <MobileMenu handleCloseMenu={handleCloseMenu} menuIsOpen={menuIsOpen} />
            </>
          ) : (
            <nav className={s.nav}>
              <ul className={s.nav__list}>
                <li className={s.nav__item}>
                  <Link
                    className={s.nav__link}
                    activeClass={s.nav__linkActive}
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About Us
                  </Link>
                </li>
                <li className={s.nav__item}>
                  <Link
                    className={s.nav__link}
                    activeClass={s.nav__linkActive}
                    to="Products"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Products
                  </Link>
                </li>
                <li className={s.nav__item}>
                  <Link
                    className={s.nav__link}
                    activeClass={s.nav__linkActive}
                    to="Partners"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
