import React, { useState } from "react";
import Link from 'next/link'
import { BsMoonFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { ChangeStatus } from "../../../Store/themeSlice";
import { MdLocalPhone } from "react-icons/md";
import { selectOneModel } from "../../../Store/Constants";
import { useEffect } from "react";


const Header = () => {
  const dispatch = useDispatch()
  const [headerFix, setHeaderFix] = useState(0)

  let ThemeStatus; 
  if (typeof window !== 'undefined') {
    ThemeStatus = localStorage.getItem('theme');
   
  }
  const [themeCheck, setThemeCheck] = useState(ThemeStatus)

  function ChangeThemeHandler(bool) {
    setThemeCheck(bool)
    localStorage.setItem("theme", bool) 
    dispatch(ChangeStatus(themeCheck))  
    console.log(bool);
  }  
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  
 
  const consts = useSelector(selectOneModel)
  const data = consts?.data?.find((constant)=> constant.key === "phone_number")
  

  const headerFixStyle = {
    background:  `${themeCheck ?"rgba(255, 255, 255, 0.2)" : "rgba(13, 13, 13, 0.2)" }`,
    backdropFilter: "blur(7px)"
  }

  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
      if(Math.round(window.scrollY) >= 100){
        setHeaderFix(true)
      }
      else{
        setHeaderFix(false)
      }
    })
  },[])

  return (
    <header style={headerFix ? headerFixStyle : null} className="header">
      <div className="container header__container">
        <a className="header__logo" href="#"></a>
        <ul className="header__list">
          <li className="header__item">
            <button onClick={()=> ChangeThemeHandler(!themeCheck)} className="global__border--color header__theme--btn ">
              <BsMoonFill className="header__theme--moon-icon" />
              <HiSun className="header__theme--sun-icon" />
            </button>
          </li>
          <li className="header__item">
            <Link href="tel:998991454565">
              <a className="header__link--contact global__text--color" href="tel:998991454565">
                <MdLocalPhone className="header__link--icon" />
                {data?.value}
              </a>
            </Link>
          </li>
          <li className="header__item">
            <Link href="/login">
              <a className="header__link-login global__text--color global__border--color" href="/login">
                Kirish
              </a>
            </Link>
          </li>
        </ul>
        
      </div>
    </header>
  );
}

export default Header;
