import Link from "next/link";
import Btn from "../Btn";
import axios from "../../axios";
import { useState } from "react";
import router from 'next/router'
import Alert from "../Alert";
const Login = () => {
  const [phone_number, setPhone_number] = useState("");
  const [isResponding, setIsRespondng]= useState(false)
  const [password, setPassword] = useState("");
  const [show, setShow]= useState(false)
  const [warningText, setWarningText]= useState('')
  const Subit = (e) => {
    setIsRespondng(true)
    e.preventDefault();
    let data = {
      phone_number: phone_number,
      password: password,
    };
    axios
      .post("api/users/login", data)
      .then((res) => {
        console.log(res.data);
        setIsRespondng(false)
        localStorage.setItem('token', res.data.data.token)
        router.push('/').finally(()=>{
          router.reload()
        })
      })
      .catch((err) => {
        setIsRespondng(false)
        console.log(err);
        console.log(err.response.data.message)
        setShow(true)
        setWarningText(err.response.data.message)
      });
  };
  return (
    <>
    <Alert type='warning' text={warningText} show={show} close={()=>{setShow(false)}} />
    <div className="login">
      <h1 className="visually-hidden">
        Dizipro Edu. Eng yaxshi 3D modelling va interier dizayn kurslari
      </h1>

      <div className="login__container container">
        <div className="login__content">
          <div className="login__welcome">
            <h2 className="login__title">Dizipro Edu</h2>
            <p className="login__desc">
              Ushbu saytda siz 3D modellingni videodarslar orqali o’rganishingiz
              mumkin. Agar siz “Dizipro Edu” kursi uchun to’lov qilsangiz, ushbu
              tizim uchun login olasiz.
            </p>
          </div>

          <form className="login__form">
            <h3 className="login__form-title">Tizimga kirish</h3>
            <input
              value={phone_number}
              className="login__input"
              name="name"
              type="text"
              aria-label="ism"
              placeholder="Telefon raqamingiz"
              onChange={(e) => {
                setPhone_number(e.target.value);
              }}
            />
            <input
              className="login__input"
              name="parol"
              value={password}
              type="password"
              aria-label="parol"
              placeholder="Parolingiz"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Btn
              clicked={(e) => {
                Subit(e);
              }}
              className="login__submit-btn"
              isResponding={isResponding}
              isDisabled={phone_number == '' || password == '' ? true : false}
            >
              Kirish
            </Btn>
          </form>
          <Link href={"https://t.me/dizipro_edu"}>
            <a className="login__external-link" target={"_blank"}>
              Admin bilan bog'lanish
            </a>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};
export default Login;
