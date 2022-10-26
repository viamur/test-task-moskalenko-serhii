import { Link } from 'react-scroll';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import s from './MobileMenu.module.scss';

const MobileMenu = ({ handleCloseMenu, menuIsOpen }) => {
  return (
    <div className={menuIsOpen ? s.menuOpen : s.menuClose}>
      <IconButton aria-label="close" onClick={() => handleCloseMenu()} className={s.btn}>
        <CloseIcon />
      </IconButton>
      <ul className={s.list}>
        <li className={s.item}>
          <Link
            className={s.nav__link}
            activeClass={s.nav__linkActive}
            onClick={() => handleCloseMenu()}
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Us
          </Link>
        </li>
        <li className={s.item}>
          <Link
            className={s.nav__link}
            activeClass={s.nav__linkActive}
            onClick={() => handleCloseMenu()}
            to="Products"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Products
          </Link>
        </li>
        <li className={s.item}>
          <Link
            className={s.nav__link}
            activeClass={s.nav__linkActive}
            onClick={() => handleCloseMenu()}
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
    </div>
  );
};

export default MobileMenu;
