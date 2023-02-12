import { isMobile } from "react-device-detect";

import MenuBar from "./MenuBar";

import Logo4Ag from "../../assets/img/logo-4-ag.png";

import "./styles.scss";
import Login from "./Login";

const Navbar = () => {
  return (
    <header className="navbar_container">
      {isMobile ? (
        <section
          className={`${
            isMobile ? "navbar_content_mobile" : "navbar_content"
          } global_conatiner`}
        >
          <div className="navbar_menu navbar_menu_mobile">
            <figure>
              <img src={Logo4Ag} alt="Logo da pagina" />
            </figure>

            <Login />
          </div>
          <MenuBar />
        </section>
      ) : (
        <section className="navbar_content global_conatiner">
          <figure>
            <img src={Logo4Ag} alt="Logo da pagina" />
          </figure>

          <div className="navbar_menu">
            <MenuBar />
            <Login />
          </div>
        </section>
      )}
    </header>
  );
};

export default Navbar;
