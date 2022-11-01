import Link from "next/link"
import router from 'next/router'
const Navbar = () => {
  console.log(router.pathname,"path")
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {
          router.pathname === "/posts/[id]" ? 
          <li className={router.pathname == '/posts/[id]' ? "navbar__item navbar__item--active" : "navbar__item "}>
          <Link legacyBehavior href="/">
            <a className="navbar__link">
            Maqolalar
            </a>
          </Link>
          </li> : null
        }
        <li className= {router.pathname == '/' ? "navbar__item navbar__item--active" : "navbar__item "}>
          <Link legacyBehavior href="/">
            <a className="navbar__link">
              Video darslar
            </a>
          </Link>
        </li>

        {/* <li className="navbar__item">
          <Link href={"/users"}>
            <a className="navbar__link">
              Foydalanuvchilar
            </a>
          </Link>
        </li> */}
      </ul>

      <Link legacyBehavior href={"/profile"}>
        <a className="navbar__avatar-link">
          <img
            className="navbar__avatar-img"
            src="../../img/default-user.png"
            alt="avatar"
            width="40"
            height="40"
          />
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
