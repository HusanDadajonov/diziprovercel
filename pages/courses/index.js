import SiteHeader from "../../components/SiteHeader";
import Link from "next/link"
import Alert from "../../components/Alert";

const Courses = () => {
  return (
    <>
      <SiteHeader>
      <main>
        <div className="courses">
          <div className="courses__container container">
            <h1 className="courses__title">Kurslar</h1>
            <ul className="courses__list">
              <li className="courses__item">
                <Link legacyBehavior href="courses/interior-design">
                  <a className="courses__link">
                    <div className="courses__item-playlist">
                      <img
                        className="courses__item-img"
                        src="img/interior-design.png"
                        srcSet="img/interior-design.png 1x, img/interior-design@2x.png 2x"
                        alt="interior design"
                        width="396"
                        height="230"
                      />

                      <div className="courses__playlist-info">
                        <p className="courses__playlist-videos-quantity">
                          24 ta video
                        </p>
                      </div>
                    </div>

                    <p className="courses__item-name">Interyer dizayn</p>
                  </a>
                </Link>
              </li>

              <li className="courses__item courses__item--locked">
                <Link legacyBehavior href={"courses/z-brush"}>
                  <a className="courses__link">
                    <div className="courses__item-playlist">
                      <img
                        className="courses__item-img"
                        src="img/z-brush.png"
                        srcSet="img/z-brush.png 1x, img/z-brush@2x.png 2x"
                        alt="z-brush"
                        width="396"
                        height="230"
                      />

                      <div className="courses__playlist-info">
                        <p className="courses__playlist-videos-quantity">
                          24 ta video
                        </p>
                      </div>
                    </div>

                    <p className="courses__item-name">ZBrush</p>
                  </a>
                </Link>

              </li>

              <li className="courses__item">
                <Link legacyBehavior href={"courses/marvelous"}>
                  <a className="courses__link">
                    <div className="courses__item-playlist">
                      <img
                        className="courses__item-img"
                        src="img/marvelous.png"
                        srcSet="img/marvelous.png 1x, img/marvelous@2x.png 2x"
                        alt="marvelous"
                        width="396"
                        height="230"
                      />

                      <div className="courses__playlist-info">
                        <p className="courses__playlist-videos-quantity">
                          24 ta video
                        </p>
                      </div>
                    </div>

                    <p className="courses__item-name">Marvelous</p>
                  </a>
                </Link>

              </li>

              <li className="courses__item">
                <Link legacyBehavior href={"courses/groffix"}>
                  <a className="courses__link">
                    <div className="courses__item-playlist">
                      <img
                        className="courses__item-img"
                        src="img/graffix.png"
                        srcSet="img/groffix.png 1x, img/groffix@2x.png 2x"
                        alt="graffix"
                        width="396"
                        height="230"
                      />

                      <div className="courses__playlist-info">
                        <p className="courses__playlist-videos-quantity">
                          24 ta video
                        </p>
                      </div>
                    </div>

                    <p className="courses__item-name">Groffix</p>
                  </a>
                </Link>
              </li>

              <li className="courses__item">
                <Link legacyBehavior href={"courses/animation"}>
                  <a className="courses__link">
                    <div className="courses__item-playlist">
                      <img
                        className="courses__item-img"
                        src="img/animation.png"
                        srcSet="img/animation.png 1x, img/animation@2x.png 2x"
                        alt="animation"
                        width="396"
                        height="230"
                      />

                      <div className="courses__playlist-info">
                        <p className="courses__playlist-videos-quantity">
                          24 ta video
                        </p>
                      </div>
                    </div>

                    <p className="courses__item-name">Animatsiya</p>
                  </a>
                </Link>
              </li>

              <li className="courses__item">
                <Link legacyBehavior href={"courses/vr"}>
                  <a className="courses__link">
                    <div className="courses__item-playlist">
                      <img
                        className="courses__item-img"
                        src="img/graffix.png"
                        srcSet="img/vr.png 1x, img/vr@2x.png 2x"
                        alt="virtual reality"
                        width="396"
                        height="230"
                      />

                      <div className="courses__playlist-info">
                        <p className="courses__playlist-videos-quantity">
                          24 ta video
                        </p>
                      </div>
                    </div>

                    <p className="courses__item-name">VR</p>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      </SiteHeader>
    </>
  );
};

export default Courses;
