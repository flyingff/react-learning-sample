import { CartItem } from '.';

const ItemList: React.FC<{
  list: CartItem[];
}> = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          <span>{item.name}</span>
          <br />
          <pre>
            <i>${item.price}</i>
            <span> * </span>
            <b>1</b>
          </pre>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
