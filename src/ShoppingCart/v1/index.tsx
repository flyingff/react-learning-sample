import AddButton from './AddButton';
import ItemList from './ItemList';
import Summary from './Summary';

const ShoppingCartV1: React.FC = () => {
  return (
    <div>
      <h2>ShoppingCart (static)</h2>
      <AddButton />
      <section>
        <ItemList />
      </section>
      <Summary />
    </div>
  );
};

export default ShoppingCartV1;
