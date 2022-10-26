import { Link } from 'react-scroll';
import Container from '../Container/Container';
import img from '../../images/about-chair.webp';
import s from './About.module.scss';

const About = () => {
  return (
    <section id="About" className={s.about}>
      <Container>
        <div className={s.wrap}>
          <img src={img} alt="chair" width={250} height={250} className={s.img} />
          <div className={s.info}>
            <h1 className={s.title}>Office Chairs</h1>
            <p className={s.descr}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam quia debitis
              libero ab aut, incidunt ex autem id soluta.
            </p>
            <Link
              to="Products"
              className={s.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Our production
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
