import SiteHeader from "../components/SiteHeader";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import Skelet from "../components/Skeleton";
import LogOut from "../components/Alert/logout";
import ProfileLoading from "../components/Loading/profile";
const Profile = (profile) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("api/users/account")
      .then((res) => {
        console.log(res);
        setUserInfo(res.data.data.user);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  console.log(profile);
  return (
    <>
      <LogOut
        showLogoutModal={showLogoutModal}
        isLogout={isLogout}
        close={() => {
          setShowLogoutModal(false);
        }}
      />
      <SiteHeader>
        <main>
          {isLoading ? (
            <>
              <ProfileLoading />
            </>
          ) : (
            <>
              <div className="profile">
                <div className="profile__container container">
                  <h1 className="profile__title">Mening profilim</h1>
                  <div className="profile__info">
                    <div className="profile__info-top">
                      <div className="profile__user-info">
                        <img
                          className="profile__user-img"
                          src="../img/default-user.png"
                          alt="avatar"
                          width={80}
                          height={80}
                        />

                        <div className="profile__user-name-id">
                          <p className="profile__user-name">
                            {userInfo.first_name} {userInfo.last_name}
                          </p>
                          {/* <span className="profile__user-id">
                            {userInfo.id}
                          </span> */}
                        </div>
                      </div>

                      <Link href={"#"}>
                        <a
                          onClick={() => {
                            setShowLogoutModal(true);
                          }}
                          className="profile__logout-link"
                        >
                          Akkauntdan chiqish
                        </a>
                      </Link>
                    </div>

                    <dl className="profil__list">
                      <div className="profil__item">
                        <dt className="profil__item-title">Telefon raqam</dt>
                        <dd className="profil__item-txt">
                          {userInfo.phone_number}
                        </dd>
                      </div>

                      <div className="profil__item">
                        <dt className="profil__item-title">Tug'ilgan sana</dt>
                        <dd className="profil__item-txt">
                          {userInfo.birthdate == null
                            ? "No'malum"
                            : userInfo.birthdate}
                        </dd>
                      </div>

                      <div className="profil__item">
                        <dt className="profil__item-title">Jinsi</dt>
                        <dd className="profil__item-txt">
                          {userInfo.gender == null
                            ? "No'malum"
                            : userInfo.gender == "m"
                            ? "ERKAK"
                            : "QIZ"}
                        </dd>
                      </div>

                      <div className="profil__item">
                        <dt className="profil__item-title">Manzil</dt>
                        <dd className="profil__item-txt profil__item-address">
                          {userInfo.address == null
                            ? "No'malum"
                            : userInfo.address}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </SiteHeader>
    </>
  );
};

export default Profile;
