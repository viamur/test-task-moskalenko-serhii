import Container from '../Container/Container';
import { Link } from 'react-scroll';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
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
          <p className={s.copyrayting}>&#169; 2020 - Mint,All Right Reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
