import { useState } from 'react';
import Payment from 'payment';
import { PatternFormat } from 'react-number-format';
import { TextField } from '@mui/material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import s from './ModalPayment.module.scss';

/* Функция отправка запрос на сервер по платежки */
const chargeCard = async req => {
  /* Берем с области window заранее записанный и инициализированный RedPay */
  if (window.RedPay) {
    try {
      /* Отправляем запрос */
      const response = await window.RedPay.ChargeCard(req);
      /* Ответ положительный с ним можно дальше работать*/

      console.log(JSON.stringify(response, null, 4));
      Notify.success('Successful Purchase');
    } catch (error) {
      /* Ответ негативный с ним можно дальше работать*/
      console.log(JSON.stringify(error, null, 4));
      Notify.failure('We were unable to accept payment.');
    }
  } else {
    console.warn('RedPay is not defined');
  }
};
/* СДЕЛАТЬ ЕЩЕ avzip инпут */
const ModalPayment = ({ amount, setShowModal }) => {
  const [number, setNumber] = useState('');
  const [nameOnCard, setnameOnCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [avsZip, setAvsZip] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const convectExpiry = `${expiry.slice(0, 2)} / 20${expiry.slice(2, 4)}`;
    const convectExpiryForReq = convectExpiry.split(' / ').join('');

    // const validNumber = Payment.fns.validateCardNumber(number);
    const validNumber = true;
    const validExpiry = Payment.fns.validateCardExpiry(convectExpiry);
    const validCvc = Payment.fns.validateCardCVC(cvv);

    if (validNumber && validExpiry && validCvc) {
      /* Формируем объект для запроса платежной карты */
      const req = {
        account: number,
        amount: amount * 100,
        expmmyyyy: convectExpiryForReq,
        cvv,
        cardHolderName: nameOnCard,
        avsZip,
      };
      console.log({ req });
      /* отправляем запрос */
      chargeCard(req)
        .then(
          /*
               При успешном закрываем модалку,
              так же есть у нас данные покупателя его номер телефона
              в переменной phone который дальше можно использовать
              */
          setShowModal(false)
        )
        .catch(
          /* При неуспешной оплате отправить например кудато в аналитику */
          setShowModal(false)
        );
    }
  };

  const handleInputChange = ({ name, value }) => {
    name === 'number' && setNumber(value);
    name === 'expiry' && setExpiry(value);
    name === 'cvv' && setCvv(value);
    name === 'avsZip' && setAvsZip(value);
    name === 'phone' && setPhone(value);
  };

  const hadleInputBlur = e => {
    const { name } = e.target;

    if (name === 'number') {
      if (!Payment.fns.validateCardNumber(number)) {
        Notify.failure('incorrect card number');
        return;
      }
    }

    if (name === 'nameOnCard') {
      console.log(name);
      if (nameOnCard.length > 20) {
        Notify.failure('incorrect card name');
        return;
      }
    }

    if (name === 'expiry') {
      const convectValue = `${expiry.slice(0, 2)} / 20${expiry.slice(2, 4)}`;
      if (!Payment.fns.validateCardExpiry(convectValue)) {
        Notify.failure('incorrect card expiry');
        return;
      }
    }

    if (name === 'cvv') {
      if (!Payment.fns.validateCardCVC(cvv)) {
        Notify.failure('incorrect cvv code');
        return;
      }
    }
  };

  return (
    <div className={s.formaAll}>
      <h4 className={s.title}>Checkout</h4>
      <form className={s.formPhone}>
        <label className={s.label}>Phone number</label>
        <PatternFormat
          name="phone"
          valueIsNumericString
          format="+# (###) ### ## ##"
          placeholder="Phone number"
          mask="_"
          required
          onValueChange={e => {
            handleInputChange({ name: 'phone', value: e.value });
          }}
          value={phone}
          customInput={TextField}
        />
      </form>
      <h5 className={s.titleCard}>Credit card details</h5>
      <form onSubmit={handleSubmit} className={s.formCard}>
        <label className={s.label}>Card Number</label>
        <PatternFormat
          name="number"
          valueIsNumericString
          format="#### #### #### ####"
          placeholder="Card Number"
          mask="_"
          required
          onValueChange={e => {
            handleInputChange({ name: 'number', value: e.value });
          }}
          onBlur={hadleInputBlur}
          value={number}
          customInput={TextField}
        />

        <label className={s.label}>Card Holder Name</label>
        <TextField
          type="text"
          name="nameOnCard"
          className="form-control"
          placeholder="Name"
          required
          value={nameOnCard}
          onBlur={hadleInputBlur}
          onChange={e => setnameOnCard(e.target.value)}
        />
        <label className={s.label}> Exp MM /YY</label>
        <PatternFormat
          name="expiry"
          valueIsNumericString
          format="## / ##"
          placeholder="Card Number"
          mask="_"
          required
          onValueChange={e => {
            handleInputChange({ name: 'expiry', value: e.value });
          }}
          onBlur={hadleInputBlur}
          value={expiry}
          customInput={TextField}
        />
        <label className={s.label}>Cvv Code </label>
        <PatternFormat
          name="cvv"
          valueIsNumericString
          format="###"
          placeholder="Cvv Code"
          mask="*"
          required
          onValueChange={e => {
            handleInputChange({ name: 'cvv', value: e.value });
          }}
          onBlur={hadleInputBlur}
          value={cvv}
          customInput={TextField}
        />
        <label className={s.label}>Zip</label>
        <PatternFormat
          name="avsZip"
          valueIsNumericString
          format="#####"
          placeholder="Zip"
          mask="_"
          required
          onValueChange={e => {
            handleInputChange({ name: 'avsZip', value: e.value });
          }}
          value={avsZip}
          customInput={TextField}
        />
        <button type="submit" className={s.btnPay}>
          PAY {amount}$
        </button>
      </form>
    </div>
  );
};

export default ModalPayment;
