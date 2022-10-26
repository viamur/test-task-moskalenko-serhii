import { useState } from 'react';
import chairList from '../../utils/chairList';
import Container from '../Container/Container';
import Modal from '../Modal/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import s from './Products.module.scss';

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  const handleClick = el => {
    setData(el);
    setShowModal(true);
  };
  return (
    <section id="Products" className={s.section}>
      <Container>
        <h2 className={s.title}>Products</h2>
        <div className={s.products}>
          {chairList.map((el, idx) => (
            <div key={el.title} className={s.products__item}>
              <div className={s.wrap}>
                <div className={s.wr}>
                  <Swiper
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {el.img.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt={el.title}
                          height={200}
                          width={200}
                          className={s.img}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <h3 className={s.products__title}>{el.title}</h3>
                <ul className={s.list}>
                  {el.benefits.map((item, idx) => (
                    <li key={idx} className={s.benefits}>
                      {' '}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={s.info}>
                <p className={s.cost}>{el.cost} $</p>
                <button type="button" className={s.btn} onClick={() => handleClick(el)}>
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
        {showModal && <Modal setShowModal={setShowModal} data={data} />}
      </Container>
    </section>
  );
};

export default Products;
