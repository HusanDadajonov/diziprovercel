
import SiteHeader from "../SiteHeader";
import Link from "next/link";
import router from "next/router";
import axios from "../../axios";
import react, { useState, useEffect } from "react";
import { baseUrl } from "../../axios";
import Skelet from "../Skeleton";
import Btn from "../Btn";
import Alert from "../Alert";
import Linkify from "react-linkify";
const Lesson = () => {
  const [data, setData] = useState({});
  const [next, setNext] = useState(null);
  const [warningText, setWarningText] = useState("");
  const [show, setShow] = useState(false);
  const [prev, setPrev] = useState(null);
  const [is_watched, setIs_watched] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isResponding, setIsResponding] = useState(false);
  const [video, setVideo]= useState('')
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`api/lessons/my/${router.query.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setIsLoading(false);
        console.log(res.data.data.lesson);
        setData(res.data.data.lesson);
        setNext(res.data.data.next);
        setPrev(res.data.data.prev);
        setIs_watched(res.data.data.is_watched);
        setVideo(`https://player.vimeo.com/video/${res.data.data.lesson.video.slice(0,10)}?h=${res.data.data.lesson.video.slice(10,20)}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        router.push("/");
      });
  }, [router.query.id, refresh]);
  // useEffect(() => {
  //   axios
  //     .get(`api/courses/${data.course_id}`)
  //     .then((res) => {
  //       setLessons(res.data.data.course.lessons)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [data]);
  const Done = () => {
    setIsResponding(true);
    axios
      .put(`/api/lessons/done/${router.query.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setRefresh(!refresh);
        setIsResponding(false);
      })
      .catch((err) => {
        setShow(true);
        setWarningText(err.response.data.message);
        setIsResponding(false);
        console.log(err);
      });
  };
  return (
    <>
      <Alert
        type="warning"
        text={warningText}
        show={show}
        close={() => {
          setShow(false);
        }}
      />
      <SiteHeader>
        <main>
          <h1 className="visually-hidden">Kurslar ichki sahifa</h1>
          <div className="course-inner">
            <div className="course-inner__container container">
              <div className="course-inner__main-content">
                {isLoading ? (
                  <>
                    <div className="course-inner__player">
                      <Skelet height={500} width={917} />
                    </div>
                  </>
                ) : (
                  <>
                  <iframe
                className="course-inner__player"
                width={917}
                height={500}
                // src={`https://www.youtube.com/embed/${data.video}?modestbranding=1&rel=0&autoplay=1&`}
                src={video}
                // src="https://www.youtube.com/embed/HMoxHtUITIQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
                allowfullscreen
                ></iframe>
                  </>
                )}

                <h2 className="course-inner__title">
                  {data.title}
                </h2>
                <p className="course-inner__desc">
                <Linkify
                    componentDecorator={(decoratedHref, decoratedText, key) => (
                      <a target="blank" href={decoratedHref} key={key}>
                          {decoratedText}
                      </a>
                  )}
                    >
                    {data.text}
                    </Linkify>
               </p>

                <div className="course-inner-links-wrapper">
                  <Link
                    href={
                      prev == null
                        ? `/lesson/${router.query.id}`
                        : `/lesson/${prev}`
                    }
                  >
                    <a
                      className={
                        prev == null
                          ? "course-inner__link course-inner__link--disabled"
                          : "course-inner__link course-inner__link--previous"
                      }
                    >
                      {/* course-inner__link--disabled */}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.52325 9.16667H16.6666V10.8333H6.52325L10.9933 15.3033L9.81492 16.4817L3.33325 10L9.81492 3.51834L10.9933 4.69667L6.52325 9.16667Z"
                          fill="currentColor"
                        />
                      </svg>
                      Oldingi video
                    </a>
                  </Link>
                  {is_watched ? (
                    <>
                      <Link
                        href={
                          next == null
                            ? `/lesson/${router.query.id}`
                            : `/lesson/${next}`
                        }
                      >
                        <a
                          className={
                            next == null
                              ? "course-inner__link  course-inner__link--disabled"
                              : "course-inner__link course-inner__link--next"
                          }
                        >
                          {/* course-inner__link--disabled */}
                          Keyingisi
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.4765 10.8334L3.33317 10.8334L3.33317 9.16669L13.4765 9.16669L9.0065 4.69669L10.1848 3.51836L16.6665 10L10.1848 16.4817L9.0065 15.3034L13.4765 10.8334Z"
                              fill="currentColor"
                            />
                          </svg>
                        </a>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Btn
                        className={
                          isResponding
                            ? "course-inner__link course-inner__link--responding "
                            : "course-inner__link course-inner__link--completed"
                        }
                        clicked={() => {
                          Done();
                        }}
                        children="Tugatdim"
                        isResponding={isResponding}
                      />
                      {/* <a onClick={()=>{Done()}} className="">Tugatdim</a> */}
                    </>
                  )}
                </div>
              </div>

              {/* <div className="course-inner__other-videos">
              <ul className="course-inner__other-videos-list">
                  {lessons.map((el)=>(
                <li className="course-inner__other-videos-item">
                  <Link href={`/lesson/${el.id}`}>
                    <a className="course-inner__other-videos-link">
                      <div className="course-inner__other-videos-card">
                        <img
                          className="course-inner__other-videos-img"
                        //   src={`${baseUrl}uploads/images/${el.image.src}`}
                         src="/img/img.jpg"
                          // src="https://img3.akspic.ru/previews/4/2/6/6/5/156624/156624-devuska-tablica-salfetka-derevo-schastliv-x750.jpg"
                          alt={el.name}
                          width={285}
                          height={130}
                        />
                      </div> */}

              {/* <div className="course-inner__other-videos-additional-info">
                        <span className="course-inner__other-videos-card-status course-inner__other-videos-card-status--watched">
                          Ko'rilgan
                        </span>

                        <button className="course-inner__other-videos-options-btn"></button>
                      </div> */}

              {/* <p className="course-inner__other-videos-card-name">
                        {el.index}-dars. {el.title}
                      </p>
                    </a>
                  </Link>
                </li>
                  ))}
              </ul>
            </div> */}
            </div>
          </div>
        </main>
      </SiteHeader>
    </>
  );
};

export default Lesson;
