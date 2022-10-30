import React from "react";
import { useSelector } from "react-redux";
import { selectOneModel } from "../../../Store/Constants";

const Footer = () => {

  const consts = useSelector(selectOneModel)
  const data = consts?.data?.find((constant)=> constant.key === "phone_number")

  return (
    <div className="footer global__bg">
      <div className="container footer__container">
        <div className="footer__wrapper">
          <a className="footer__logo" href="#">
          </a>
      

          <div className="footer__info--wrap">
            <div className="footer__contact">
              <p className="footer__contact__title global__text--color">Bog’lanish:</p>
              <a style={{textDecoration: "none"}} href="tel:998991454565" className="footer__contact__number global__text--color">  {data?.value}</a>
            </div>

            <div className="footer__social-medias">
              <p className="footer__social-medias__title global__text--color">Ijtimoiy tarmoqlar:</p>

              <ul className="footer__social-medias__list">
                <li className="footer__social-medias__item">
                  <a className="footer__social-medias__instagram-link" href="#"></a>
                </li>
                <li className="footer__social-medias__item">
                  <a className="footer__social-medias__telegram-link" href="#"></a>
                </li>
                <li className="footer__social-medias__item">
                  <a className="footer__social-medias__youtube-link" href="#"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
       

        <p className="footer__credit global__text--color">
          <span className="footer__copy">&copy;</span>
          2022 Dizipro
        </p>
       
      </div>
    </div>
  );
};

export default Footer;
