import { CartItem } from '.';

const Summary: React.FC<{
  list: CartItem[];
}> = ({ list }) => {
  const itemCount = list.length;
  const totalPrice = list.reduce((x, y) => x + y.price, 0);
  return (
    <p>
      <span>{`total ${itemCount} items`}</span>
      <i>{` ($${totalPrice})`}</i>
    </p>
  );
};

export default Summary;
