import React from 'react';
import { CartItem } from '.';

const ItemList: CartItem[] = [
  { name: 'Good job', price: 29.99 },
  { name: 'T-shirt', price: 9.15 },
  { name: 'Nvida RTX3090Ti', price: 9.99 },
];
const randomFromZeroTo = (max = 3) => Math.floor(Math.random() * max);

const AddButton: React.FC<{
  onAddItem: React.Dispatch<React.SetStateAction<CartItem[]>>;
}> = ({ onAddItem }) => {
  const handleClickAdd = () => {
    onAddItem((it) => it.concat(ItemList[randomFromZeroTo(ItemList.length)]));
  };
  const handleCleraClicked = () => {
    onAddItem([]);
  };
  return (
    <React.Fragment>
      <button onClick={handleClickAdd}>Add One random item</button>
      <span> </span>
      <button onClick={handleCleraClicked}>Clear</button>
    </React.Fragment>
  );
};

export default AddButton;
