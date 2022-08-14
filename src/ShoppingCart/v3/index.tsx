import { useState } from 'react';
import AddButton from './AddButton';
import ItemList from './ItemList';
import Summary from './Summary';

export interface CartItem {
  name: string;
  price: number;
}
export interface CartItemAggregation {
  item: CartItem;
  count: number;
}
const ShoppingCartV1: React.FC = () => {
  // Advanced: How about use useReducer hook instead?
  const [list, setList] = useState<CartItemAggregation[]>([]);
  const handleAddItem = (item: CartItem) => {
    const existedAggregation = list.find((it) => it.item.name === item.name);
    if (existedAggregation) {
      setList(
        list.map((item) =>
          item === existedAggregation
            ? { ...existedAggregation, count: existedAggregation.count + 1 }
            : item
        )
      );
    } else {
      setList(list.concat({ item, count: 1 }));
    }
  };
  const handleClear = () => {
    setList([]);
  };
  return (
    <div>
      <h2>ShoppingCart</h2>
      <AddButton onAddItem={handleAddItem} onClear={handleClear} />
      <section>
        <ItemList list={list} />
      </section>
      <Summary list={list} />
    </div>
  );
};

export default ShoppingCartV1;
