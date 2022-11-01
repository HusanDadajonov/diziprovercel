import Navbar from "../Navbar";
import axios from 'axios'
import Link from "next/link"
import { useEffect, useState } from "react";
import router from 'next/router'
import React from 'react'
const SiteHeader = ({children}) => {
  // ../../img/header-logo.svg
  const [profile, setProfile]= useState({})
  useEffect(()=>{
    axios.get('https://edu.yamo.uz/api/users/account',{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res)=>{
      console.log(res)
      setProfile(res.data.data.user)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
//   const childrenWithProps = React.Children.map(children, (child, i) =>
//   React.cloneElement(child, {profile})
// );
//  console.log(childrenWithProps)
  return (
    <>
    <header className="site-header">
      <div className="site-header__container container">
        <Link legacyBehavior href={"/main"}>
          <a className="site-header__logo">
            <img src={router.pathname === "/" ? "../../img/logo.svg" : "../../img/header-logo.svg"} alt="dizipro logo" width="124" height="30"/>
          </a>
        </Link>
        <Navbar/>
      </div>
    </header>
    {children}
    </>
  )
}

export default SiteHeader;