import { useRouter } from "next/dist/client/router";
import { useParams } from "react-router-dom";
import SiteHeader from "../../../components/SiteHeader";
import Link from "next/link";
const CourseInner = () => {
  return (
    <>
      <SiteHeader></SiteHeader>

      <main>
        <h1 className="visually-hidden">Kurslar ichki sahifa</h1>

        <div className="course-inner">
          <div className="course-inner__container container">
            <div className="course-inner__main-content">
            <iframe
                className="course-inner__player"
                width={917}
                height={500}
                src="https://www.youtube.com/embed/jkiRwhslxSk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <h2 className="course-inner__title">
                3-dars. Vray dasturi haqida qisqacha
              </h2>
              <p className="course-inner__desc">
                This is a web design course in Figma Creating a UI Kit. Yes, we
                will create our own professional ui kit in Figma. It's true and
                it's much easier than it might seem. This is not just a design
                course, this is a course on creating a modern design product.
                Not every practicing designer can boast of the ability to create
                such complex systems as ui kit and professional work with
                components.<br className="course-inner__br"></br>This is a web
                design course in Figma Creating a UI Kit. Yes, we will create
                our own professional ui kit in Figma. It's true and it's much
                easier than it might seem.
              </p>

              <div className="course-inner-links-wrapper">
                <Link href={"#"}>
                  <a className="course-inner__link course-inner__link--previous">
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

                {/* <Link href={"#"}>
                  <a className="course-inner__link course-inner__link--completed">Tugatdim</a>
                </Link> */}

                <Link href={"#"}>
                  <a className="course-inner__link course-inner__link--next">
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
              </div>
            </div>

            <div className="course-inner__other-videos">
              <ul className="course-inner__other-videos-list">
                <li className="course-inner__other-videos-item">
                  <Link href={"#"}>
                    <a className="course-inner__other-videos-link">
                      <div className="course-inner__other-videos-card">
                        <img
                          className="course-inner__other-videos-img"
                          src="../../img/inner-player-bg.png"
                          alt="vray"
                          width={285}
                          height={130}
                        />
                      </div>

                      <div className="course-inner__other-videos-additional-info">
                        <span className="course-inner__other-videos-card-status course-inner__other-videos-card-status--watched">
                          Ko'rilgan
                        </span>

                        <button className="course-inner__other-videos-options-btn"></button>
                      </div>

                      <p className="course-inner__other-videos-card-name">
                        1-dars. Vray dasturi haqida qisqacha
                      </p>
                    </a>
                  </Link>
                </li>

                <li className="course-inner__other-videos-item">
                  <Link href={"#"}>
                    <a className="course-inner__other-videos-link">
                      <div className="course-inner__other-videos-card">
                        <img
                          className="course-inner__other-videos-img"
                          src="../../img/inner-player-bg.png"
                          alt="vray"
                          width={285}
                          height={130}
                        />
                      </div>

                      <div className="course-inner__other-videos-additional-info">
                        <span className="course-inner__other-videos-card-status course-inner__other-videos-card-status--watched">
                          Ko'rilgan
                        </span>

                        <button className="course-inner__other-videos-options-btn"></button>
                      </div>

                      <p className="course-inner__other-videos-card-name">
                        2-dars. Vray dasturi haqida qisqacha
                      </p>
                    </a>
                  </Link>
                </li>

                <li className="course-inner__other-videos-item">
                  <Link href={"#"}>
                    <a className="course-inner__other-videos-link">
                      <div className="course-inner__other-videos-card">
                        <img
                          className="course-inner__other-videos-img"
                          src="../../img/inner-player-bg.png"
                          alt="vray"
                          width={285}
                          height={130}
                        />
                      </div>

                      <div className="course-inner__other-videos-additional-info">
                        <span className="course-inner__other-videos-card-status">
                          Ko'rilmagan
                        </span>

                        <button className="course-inner__other-videos-options-btn"></button>
                      </div>

                      <p className="course-inner__other-videos-card-name">
                        3-dars. Vray dasturi haqida qisqacha
                      </p>
                    </a>
                  </Link>
                </li>

                <li className="course-inner__other-videos-item">
                  <Link href={"#"}>
                    <a className="course-inner__other-videos-link">
                      <div className="course-inner__other-videos-card">
                        <img
                          className="course-inner__other-videos-img"
                          src="../../img/inner-player-bg.png"
                          alt="vray"
                          width={285}
                          height={130}
                        />
                      </div>

                      <div className="course-inner__other-videos-additional-info">
                        <span className="course-inner__other-videos-card-status">
                          Ko'rilmagan
                        </span>

                        <button className="course-inner__other-videos-options-btn"></button>
                      </div>

                      <p className="course-inner__other-videos-card-name">
                        4-dars. Vray dasturi haqida qisqacha
                      </p>
                    </a>
                  </Link>
                </li>

                <li className="course-inner__other-videos-item">
                  <Link href={"#"}>
                    <a className="course-inner__other-videos-link">
                      <div className="course-inner__other-videos-card">
                        <img
                          className="course-inner__other-videos-img"
                          src="../../img/inner-player-bg.png"
                          alt="vray"
                          width={285}
                          height={130}
                        />
                      </div>

                      <div className="course-inner__other-videos-additional-info">
                        <span className="course-inner__other-videos-card-status">
                          Ko'rilmagan
                        </span>

                        <button className="course-inner__other-videos-options-btn"></button>
                      </div>

                      <p className="course-inner__other-videos-card-name">
                        5-dars. Vray dasturi haqida qisqacha
                      </p>
                    </a>
                  </Link>
                </li>

                <li className="course-inner__other-videos-item">
                  <Link href={"#"}>
                    <a className="course-inner__other-videos-link">
                      <div className="course-inner__other-videos-card">
                        <img
                          className="course-inner__other-videos-img"
                          src="../../img/inner-player-bg.png"
                          alt="vray"
                          width={285}
                          height={130}
                        />
                      </div>

                      <div className="course-inner__other-videos-additional-info">
                        <span className="course-inner__other-videos-card-status">
                          Ko'rilmagan
                        </span>

                        <button className="course-inner__other-videos-options-btn"></button>
                      </div>

                      <p className="course-inner__other-videos-card-name">
                        6. Vray dasturi haqida qisqacha
                      </p>
                    </a>
                  </Link>
                </li>

                <li className="course-inner__other-videos-item">
                  <Link href={"#"}>
                    <a className="course-inner__other-videos-link">
                      <div className="course-inner__other-videos-card">
                        <img
                          className="course-inner__other-videos-img"
                          src="../../img/inner-player-bg.png"
                          alt="vray"
                          width={285}
                          height={130}
                        />
                      </div>

                      <div className="course-inner__other-videos-additional-info">
                        <span className="course-inner__other-videos-card-status">
                          Ko'rilmagan
                        </span>

                        <button className="course-inner__other-videos-options-btn"></button>
                      </div>

                      <p className="course-inner__other-videos-card-name">
                        7-dars. Vray dasturi haqida qisqacha
                      </p>
                    </a>
                  </Link>
                </li>

                <li className="course-inner__other-videos-item">
                  <Link href={"#"}>
                    <a className="course-inner__other-videos-link">
                      <div className="course-inner__other-videos-card">
                        <img
                          className="course-inner__other-videos-img"
                          src="../../img/inner-player-bg.png"
                          alt="vray"
                          width={285}
                          height={130}
                        />
                      </div>

                      <div className="course-inner__other-videos-additional-info">
                        <span className="course-inner__other-videos-card-status">
                          Ko'rilmagan
                        </span>

                        <button className="course-inner__other-videos-options-btn"></button>
                      </div>

                      <p className="course-inner__other-videos-card-name">
                        8-dars. Vray dasturi haqida qisqacha
                      </p>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CourseInner;
