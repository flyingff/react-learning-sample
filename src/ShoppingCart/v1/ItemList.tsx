const ItemList: React.FC = () => {
  return (
    <ul>
      <li>
        <span>Good job</span>
        <br />
        <pre>
          <i>29.99$</i>
          <span> * </span>
          <b>1</b>
        </pre>
      </li>

      <li>
        <span>T-shirt</span>
        <br />
        <pre>
          <i>9.15$</i>
          <span> * </span>
          <b>2</b>
        </pre>
      </li>
    </ul>
  );
};

export default ItemList;
