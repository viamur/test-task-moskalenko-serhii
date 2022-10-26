import Container from '../Container/Container';
import partnersList from '../../utils/partnersList';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import s from './Partners.module.scss';

const Partners = () => {
  return (
    <section id="Partners" className={s.section}>
      <Container>
        <h3 className={s.title}>Partners</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {partnersList.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className={s.item}>
                <img src={partner.img} alt="logo" className={s.img} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Partners;
