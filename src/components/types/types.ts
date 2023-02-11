export interface ButtonProps {
  name: string;
  item?: Item;
  isActive: boolean;
  handlerMenuActive: () => void;
}

export interface Item {
  name: string;
  icon: string;
  items: string[];
}
