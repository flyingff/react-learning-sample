import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import ShoppingCart from '@/ShoppingCart';
import SearchUser from '@/SearchUser';

const Menu: React.FC = () => {
  return (
    <div>
      <h1>React Learning Sample</h1>
      <p>Welcome. Choose the sample you want to go:</p>
      <ul>
        <Link to="/shopping-cart">
          <li>Shpping Cart</li>
        </Link>
        <Link to="/search-user">
          <li>Search User</li>
        </Link>
      </ul>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/search-user" element={<SearchUser />} />
        <Route path="*" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
