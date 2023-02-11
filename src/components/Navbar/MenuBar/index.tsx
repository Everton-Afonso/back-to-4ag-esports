import MenuItens from "./MenuItens";

import IconSearch from "../../../assets/svg/search.svg";

import "./styles.scss";

const MenuBar = () => {
  return (
    <section className="menu_bar_container">
      <MenuItens />
      <div>
        <p>Search on our Esports Gaming...</p>
      </div>
      <figure>
        <img src={IconSearch} alt="Icon search" />
      </figure>
    </section>
  );
};

export default MenuBar;
