import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import instance from "../../../axios";
import { getConstantsSlice, selectOneModel } from "../../../Store/Constants";
import { getCoursesSlice } from "../../../Store/Courses";
import { getFaqsSlice } from "../../../Store/Faqs";
import { getPortfoliosSlice } from "../../../Store/Portfolios";
import { getTestimonialsSlice } from "../../../Store/Testimonials";
import Articles from "../../Articles/articles";
import AboutProject from "./AboutProject/AboutProject";
import CommentsSlider from "./CommentsSlider/CommentsSlider";
import FrequentQuestions from "./FrequentQuestions/frequentQuestions";
import Hero from "./Hero/Hero";
import InterestingNumbers from "./InterestingNumbers/InterestingNumbers";
import OurCourses from "./OurCourses/OurCourses";
import Works from "./Works/Works";
import Router, { useRouter } from 'next/router'
import api from 'axios';

const Main = () => {
  const dispatch = useDispatch()
  const constantsStatus = useSelector(state => state.get_constats.status);
  const testimonialsStatus = useSelector(state => state.get_testimonials.status);
  const coursesStatus = useSelector(state => state.get_courses.status);
  const faqsStatus = useSelector(state => state.get_faqs.status);
  const portfoliosStatus = useSelector(state => state.get_portfolios.status)  
  const router = useRouter() 
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    if(constantsStatus === "idle") {
      dispatch(getConstantsSlice());
    }
    if(testimonialsStatus === "idle"){
      dispatch(getTestimonialsSlice())
    }
    if(coursesStatus === "idle"){
      dispatch(getCoursesSlice())
    }
    if(faqsStatus === "idle"){
      dispatch(getFaqsSlice())
    }
    if(portfoliosStatus === "idle"){
      dispatch(getPortfoliosSlice())
    }
  },[constantsStatus, testimonialsStatus, coursesStatus])


  useEffect(() => {
    async function loadUserFromCookies() {
        const token = window.localStorage.getItem('token')
        if(!token){
            router.push('/main')
        } 
        else {
            api.defaults.headers.Authorization = `Bearer ${token}`
            api.get('https://edu.yamo.uz/api/users/account', {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then((res)=>{
                setUser(res.data.data);
               console.log(res)
               router.push('/courses')
            }).catch((err)=>{
                console.log(err)
                router.push('/main')
            })
        }
        setLoading(false)
    }
    loadUserFromCookies()
}, [])

  return (
    <main className="main">
      <div className=" global__bg">
        <div className=" container main__container">
          <Hero />
        </div>

      </div>
   
      <AboutProject />
      <InterestingNumbers />
      <Works />
      <OurCourses />
      {/* <CommentsSlider /> */}
      <FrequentQuestions />
  
    </main>
  );
};

export default Main;
