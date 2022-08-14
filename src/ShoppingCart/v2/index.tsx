import { useState } from 'react';
import AddButton from './AddButton';
import ItemList from './ItemList';
import Summary from './Summary';

export interface CartItem {
  name: string;
  price: number;
}
const ShoppingCartV1: React.FC = () => {
  const [list, setList] = useState<CartItem[]>([]);
  return (
    <div>
      <h2>ShoppingCart</h2>
      <AddButton onAddItem={setList} />
      <section>
        <ItemList list={list} />
      </section>
      <Summary list={list} />
    </div>
  );
};

export default ShoppingCartV1;
