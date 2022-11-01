import react, { useState, useEffect } from "react";
import SiteHeader from "../SiteHeader";
import Link from "next/link";
import Alert from "../Alert";
import axios from "../../axios";
import { baseUrl } from "../../axios";
import MainPageLoading from "../Loading";
const LessonsCourse = () => {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const [lenght, setLenght]= useState(0)
  useEffect(() => {
    setIsLoading(true)
    axios
      .get("api/courses/my", {
        headers : {
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res) => {
        console.log(res);
        setData(res.data.data.rows)
        setLenght(res.data.data.rows[0].lessons.length)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  },[]);
  console.log(data)
  return (
    <SiteHeader>
      <main>
        <div className="courses">
          <div className="courses__container container">
            <h1 className="courses__title">Kurslar</h1>
            <ul className="courses__list">
         {isLoading ? <>
         <MainPageLoading/></>: <>
                {data.map((el, index)=>(
                  <div key={index}>
                  { el.groups.length ==0 || el.groups[0].group_users.length == 0 ? <>
                    <li  className="courses__item courses__item--locked ">
                  <a className="courses__link">
                    <div className="courses__item-playlist">
                      <img
                        // src={`${baseUrl}uploads/images/${el.image.src}`}
                        // src="/img/player-bg.png"
                        className="courses__item-img"
                        srcSet={`${baseUrl}uploads/images/${el.image.src} 1x, ${baseUrl}uploads/images/${el.image.src} 2x`}
                        alt={el.name}
                        width="396"
                        height="230"
                        />
                      <div className="courses__playlist-info">
                        <p className="courses__playlist-videos-quantity">
                          {el.lessons.length} ta video
                        </p>
                      </div>
                    </div>
                    <p className="courses__item-name">{el.name}</p>
                  </a>
              </li>
                  </>: <>
                  <li className="courses__item ">
                <Link href={`lessons/${el.id}`}>
                  <a className="courses__link">
                    <div className="courses__item-playlist">
                      <img
                        // src={`${baseUrl}uploads/images/${el.image.src}`}
                        // src="/img/player-bg.png"
                        className="courses__item-img"
                        srcSet={`${baseUrl}uploads/images/${el.image.src} 1x, ${baseUrl}uploads/images/${el.image.src} 2x`}
                        alt={el.name}
                        width="396"
                        height="230"
                        />
                      <div className="courses__playlist-info">
                        <p className="courses__playlist-videos-quantity">
                        {el.lessons.length}  ta video
                        </p>
                      </div>
                    </div>
                    <p className="courses__item-name">{el.name}</p>
                  </a>
                </Link>
                  </li>
                  </>}
              
                  </div>
                ))}
         </>}
              {/* courses__item courses__item--locked */}
            </ul>
          </div>
        </div>
      </main>
    </SiteHeader>
  );
};
export default LessonsCourse;
