import { useState } from "react";

import NavButton from "./NavButton";

import "./styles.scss";

const menuItems = [
  {
    name: "Menu",
    icon: "",
    items: ["Display", "Editor", "Theme", "Interface"],
  },
];

const MenuItens = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const handlerMenuActive = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <aside className="sidebar" key={1}>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <>
            {menuItems && (
              <NavButton
                key={item.name}
                name={item.name}
                item={item}
                isActive={isMenuActive}
                handlerMenuActive={handlerMenuActive}
              />
            )}
          </>
        ))}
      </nav>
    </aside>
  );
};

export default MenuItens;
