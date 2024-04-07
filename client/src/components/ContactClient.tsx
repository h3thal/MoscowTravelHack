import {memo, useState} from "react";
import Input from "../components/Input.tsx";

const ContactClient = memo(() => {
  const [email, setEmail] = useState('myemail@mail.ru');
  const [phone, setPhone] = useState('+7 998 953-52-02');
  return (
    <div className={'contact-client'}>
      <div className="contact-client__title">Контакты покупателя</div>
      <div className="contact-client__subtitle">Для получения документов</div>
      <div className={'contact-client__inputs'}>
        <Input value={email} type={'email'} onChange={e => setEmail(e.nativeEvent.target.value)}/>
        <Input value={phone} type={'phone'} onChange={e => setPhone(e.nativeEvent.target.value)}/>
      </div>
    </div>
  )
});

export default ContactClient;
