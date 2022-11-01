import React from 'react'
import { AiOutlineClockCircle } from "react-icons/ai";

function OurCoursesCard({item}) {
  console.log(item);

  return (
    <li className='our-courses__item '>
        <div className='our-courses__block'>
            <img className='our-courses__img' src={`https://edu.yamo.uz/uploads/images/7b3f5216-cf39-44da-bfab-436a5e5e2c79.png`} alt="design" />
            <h3 className='our-courses__card--title global__text--color'>{item?.name}</h3>
            <div className='our-courses__info--wrap'>
                <AiOutlineClockCircle className='our-courses__clock--icon global__text--color' />
                <p className='our-courses__clock global__text--color'>{item?.total_hours} soat</p>
                <span className='our-courses__dot global__text--color'>•</span>
                <p className='our-courses__clock global__text--color'>{item?.total_lessons} dars</p>
            </div>
            <p className='our-courses__desc global__text--color'>{item?.description}</p> 
        </div>
        <div className='our-courses__wrapper'>
          {/* <div className='our-courses__info--account'>
            <img className='our-courses__info--avatart' src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="user-avatar" />       
            <h3 className='our-courses__info--name global__text--color  '>Andrei Neagoie</h3> 
          </div> */}
          <button className='global__border--color our-courses__btn global__text--color'>Batafsil ma’lumot</button>
        </div>

    </li>
  )
}

export default OurCoursesCard;
