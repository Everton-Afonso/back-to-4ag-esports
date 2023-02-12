import { useState } from "react";

import MenuButton from "./MenuButton";

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
              <MenuButton
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
