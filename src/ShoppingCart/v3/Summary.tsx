import { CartItemAggregation } from '.';

const Summary: React.FC<{
  list: CartItemAggregation[];
}> = ({ list }) => {
  const itemCount = list.reduce((x, y) => x + y.count, 0);
  const totalPrice = list.reduce((x, y) => x + y.count * y.item.price, 0);
  return (
    <p>
      <span>{`total ${itemCount} items`}</span>
      <i>{` ($${totalPrice})`}</i>
    </p>
  );
};

export default Summary;
