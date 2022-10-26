import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Container from '../Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import s from '../Modal/Modal.module.scss';
import ModalPayment from '../ModalPayment/ModalPayment';

export default function Modal({ data, setShowModal }) {
  const portalModal = document.querySelector('#modalRoot');

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowModal]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      setShowModal(false);
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <Container>
          <div className={s.btnClose}>
            <IconButton aria-label="close" onClick={() => setShowModal(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className={s.wrapper}>
            <div key={data.title} className={s.products__item}>
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
                    {data.img.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt={data.title}
                          height={200}
                          width={200}
                          className={s.img}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className={s.textBlock}>
                  <h3 className={s.products__title}>{data.title}</h3>
                  <ul className={s.list}>
                    {data.benefits.map((item, idx) => (
                      <li key={idx} className={s.benefits}>
                        {' '}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className={s.form}>
              <ModalPayment amount={data.cost} setShowModal={setShowModal} />
            </div>
          </div>
        </Container>
      </div>
    </div>,
    portalModal
  );
}
