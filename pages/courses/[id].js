import react, { useState, useEffect } from "react";
import SiteHeader from "../../components/SiteHeader";
import Link from "next/link";
import axios from "axios";
import router from "next/router";
import {baseUrl} from '../../axios'
import LessonsLoading from "../../components/Loading/lessons";
const Lessons = () => {
  const [isLoading, setIsLoading]= useState(false)
  const [courseInfo, setCourseInfo]= useState({ name: '' , number: 0 })
  const [data, setData] = useState([]);
  const [userLesson, setUserLesson]= useState(0)
  const [src, setSrc]= useState('')
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`https://edu.yamo.uz/api/courses/my/${router.query.id}`,{
        headers : {
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res) => {
        console.log(res);
        setCourseInfo({name: res.data.data.rows.name, number: res.data.data.rows.lessons.length })
        setData(res.data.data.rows.lessons)
        setSrc(res.data.data.rows.image.src)
        setUserLesson(res.data.data.rows.user_lessons[0].lesson)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, []);
  return (
    <>
      <SiteHeader>
        <main>
          <div className="course">
            <div className="course__container container">
              <Link legacyBehavior href={"/courses"}>
                <a className="course__link-back">Ortga qaytish</a>
              </Link>

              <div className="course__name">
                <h1 className="course__title">{courseInfo.name}</h1>
                <span className="course__videos-quantity">({courseInfo.number} ta dars)</span>
              </div>
              {/* .slice(0,5) */}
              <ul className="course__list">
                {isLoading ? <>
                <LessonsLoading/></>: <>
                  {data.slice(0, userLesson).map((el, index)=>(
                <li key={index} className="course__item">
                  <Link legacyBehavior href={`/lesson/${el.id}`}> 
                    <a className="course__link">
                      <div className="course__item-play">
                        <img
                          className="course__item-img"
                          src={`https://edu.yamo.uz/uploads/images/${el.image.src} `}
                          // srcSet={`${baseUrl}uploads/images/${el.image.src} 1x, ${baseUrl}uploads/images/${el.image.src} 2x`}
                          alt="interior design"
                          width="297"
                          height="167"
                        />
                      </div>
                      <p className="course__item-name">
                        {el.title}
                      </p>
                    </a>
                  </Link>
                </li>
                  ))}
                    {data.slice(userLesson).map((el, index)=>(
                <li key={index} className="course__item course__item--locked">
                    <a className="course__link">
                      <div className="course__item-play">
                        <img
                          className="course__item-img"
                          src={`https://edu.yamo.uz/uploads/images/${el.image.src}`}
                          // src={`${baseUrl}uploads/images/${el.image.src}`}
                          // srcSet={`${baseUrl}uploads/images/${el.image.src} 1x, ${baseUrl}uploads/images/${el.image.src} 2x`}
                          alt="interior design"
                          width="297"
                          height="167"
                        />
                      </div>
                      <p className="course__item-name">
                        {el.title}
                      </p>
                    </a>
                </li>
                  ))}
                </>}
                {/* course__item course__item--locked */}
              </ul>
            </div>
          </div>
        </main>
      </SiteHeader>
    </>
  );
};
export default Lessons;
