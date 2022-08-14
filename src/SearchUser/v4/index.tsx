import React, { Suspense, useEffect, useRef, useState } from 'react';
import { searchForUser } from '../service/users';

const SearchList: React.FC<{
  searchResult: string[];
  onAddPerson: (person: string) => void;
}> = ({ searchResult, onAddPerson }) => {
  return (
    <ul>
      {searchResult.map((name, index) => (
        <a
          key={index}
          href="#"
          onClick={(ev) => {
            ev.preventDefault();
            onAddPerson(name);
          }}
        >
          <li>{name}</li>
        </a>
      ))}
    </ul>
  );
};
const SearchUser: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Promise<string[]>>(
    Promise.resolve([])
  );
  const [selected, setSelected] = useState<string[]>([]);

  // trigger search when text changes
  useEffect(() => {
    if (searchText) {
      setSearchResult(searchForUser(searchText));
    } else {
      setSearchResult(Promise.resolve([]));
    }
  }, [searchText]);

  const handleAddPerson = (person: string) => {
    setSelected((it) => it.concat(person));
    setSearchText('');
  };

  const LazyLoadedList = React.lazy(() =>
    searchResult.then((list) => ({
      default: () => (
        <SearchList searchResult={list} onAddPerson={handleAddPerson} />
      ),
    }))
  );

  return (
    <div>
      <div>
        <span>Search for users: </span>
        <input
          value={searchText}
          onChange={(ev) => setSearchText(ev.target.value)}
        />
      </div>

      {/** search list */}
      <Suspense fallback={<div>loading...</div>}>
        <LazyLoadedList />
      </Suspense>

      {/** selected list */}
      <p>Selected users:</p>
      <ol>
        {selected.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </div>
  );
};

export default SearchUser;
