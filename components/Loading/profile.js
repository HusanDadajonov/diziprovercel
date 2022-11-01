import Skelet from '../Skeleton'
import Link from 'next/link'
const ProfileLoading = ()=>{
    return(
        <>
        <div className="profile">
            <div className="profile__container container">
              <h1 className="profile__title">Mening profilim</h1>
              <div className="profile__info">
                <div className="profile__info-top">
                  <div className="profile__user-info">
                  <Skelet borderRadius={100} width={80} height={80} className="" />
                    <div className="profile__user-name-id">
                      <p style={{marginLeft: '10px'}} className="profile__user-name">
                      <Skelet width={140} height={36} />
                      </p>
                    </div>
                  </div>

                  <Link legacyBehavior href={"#"}>
                    <a  className="profile__logout-link">Akkauntdan chiqish</a>
                  </Link>
                </div>

                <dl className="profil__list">
                  <div className="profil__item">
                    <dt className="profil__item-title">Telefon raqam</dt>
                    <dd className="profil__item-txt">
                    <Skelet width={180} height={30} />
                    </dd>
                  </div>

                  <div className="profil__item">
                    <dt className="profil__item-title">Tug'ilgan sana</dt>
                    <dd className="profil__item-txt">
                    <Skelet width={180} height={30} />
                    </dd>
                  </div>

                  <div className="profil__item">
                    <dt className="profil__item-title">Jinsi</dt>
                    <dd className="profil__item-txt">
                    <Skelet width={180} height={30} />
                    </dd>
                  </div>

                  <div className="profil__item">
                    <dt className="profil__item-title">Manzil</dt>
                    <dd className="profil__item-txt profil__item-address">
                    <Skelet width={180} height={30} />
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </>
    )
}
export default ProfileLoading