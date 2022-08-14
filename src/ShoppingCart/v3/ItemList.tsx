import { CartItemAggregation } from '.';

const ItemList: React.FC<{
  list: CartItemAggregation[];
}> = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          <span>{item.item.name}</span>
          <br />
          <pre>
            <i>${item.item.name}</i>
            <span> * </span>
            <b>${item.count}</b>
          </pre>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
