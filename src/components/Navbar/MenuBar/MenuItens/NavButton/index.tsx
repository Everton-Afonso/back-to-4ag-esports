import { FC, useRef } from "react";

import { ButtonProps } from "../../../../types/types";

import "./styles.scss";

const NavButton: FC<ButtonProps> = ({
  name,
  item,
  isActive,
  handlerMenuActive,
}) => {
  const navRef = useRef<HTMLDivElement>(null);

  const Icon = ({ icon }: { icon: string }) => (
    <span className="material-symbols-outlined">{icon}</span>
  );

  return (
    <>
      <button
        type="button"
        onClick={handlerMenuActive}
        className={isActive ? "active" : ""}
      >
        {item?.icon && <Icon icon={item?.icon} />}
        <span>{name}</span>
        {item?.items && <Icon icon={`expand_${isActive ? "less" : "more"}`} />}
      </button>
      {item?.items && (
        <div
          className={`sub-nav ${isActive ? "open" : ""}`}
          style={{
            height: !isActive ? 0 : navRef.current?.clientHeight,
          }}
        >
          <div ref={navRef} className="sub-nav-inner">
            {item?.items.map((subItem, index) => (
              <NavButton
                key={index}
                name={subItem}
                isActive={isActive}
                handlerMenuActive={handlerMenuActive}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavButton;
