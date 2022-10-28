import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectOneModel } from "../../../../Store/Constants";

function Hero() {
  const [heroImg,setHeroImg] = useState(false)
  const consts = useSelector(selectOneModel)
  const HERO_TITLE = consts?.data?.find((constant)=> constant.key === "hero_title")
  const HERO_DESCRIPTION = consts?.data?.find((constant)=> constant.key === "hero_description")

  useEffect(()=>{
    window.addEventListener("resize",()=> {
      if(window.innerWidth <= 540){
        setHeroImg(true)
      }
      else{
        setHeroImg(false)
      }
    })
  },[])

  return (
    <section className='hero'>
        <div className='hero__wrap'>
            <div className='hero__col'>
              <div className="hero__img--warpper" />
            </div>
            <div className='hero__col'>
                <h2 className='hero__title global__text--color'>{HERO_TITLE?.value}</h2>
                <p className='hero__desc global__text--color'>{HERO_DESCRIPTION?.value}</p>
                <a href="#about">
                <button className='hero__btn'>Boshlash</button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero;
