import MenuBar from "./MenuBar";

import Logo4Ag from "../../assets/img/logo-4-ag.png";

import "./styles.scss";
import Login from "./Login";

const Navbar = () => {
  return (
    <header className="navbar_container">
      <section className="navbar_content global_conatiner">
        <figure>
          <img src={Logo4Ag} alt="Logo da pagina" />
        </figure>

        <div className="navbar_menu">
          <MenuBar />
          <Login />
        </div>
      </section>
    </header>
  );
};

export default Navbar;
