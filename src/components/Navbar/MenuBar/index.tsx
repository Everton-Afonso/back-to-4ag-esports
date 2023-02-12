import MenuItens from "./MenuItens";

import IconSearch from "../../../assets/svg/search.svg";

import "./styles.scss";

const MenuBar = () => {
  return (
    <section className="menu_bar_container">
      <div className="menu_bar_itens">
        <MenuItens />
      </div>
      <form className="menu_bar_search">
        <input
          type="text"
          name="search"
          placeholder="Search on our Esports Gaming..."
        />
      </form>
      <div className="menu_bar_icons">
        <img src={IconSearch} alt="Icon search" />
      </div>
    </section>
  );
};

export default MenuBar;
