import axios from "../../../../axios";
import React, { useState, useEffect } from "react";
import OurCoursesCard from "./OurCoursesCard/OurCoursesCard";
import { courses } from "../../../../Store/Courses";
import { useSelector } from "react-redux";

function OurCourses() {
  const coursesData = useSelector(courses)

  return (
    <section className="our-courses global__bg">
      <div >
        <div className="container main-container">
          <div className="our-courses__wrap">
            <h2 className="our-courses__title global__text--color">Bizning kurslarimiz</h2>
            <ul className="our-courses__list">
              {coursesData?.data?.map((item) => (
                <OurCoursesCard key={item?.course_id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default OurCourses;
