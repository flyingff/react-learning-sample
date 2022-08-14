import { useEffect, useRef, useState } from 'react';
import { searchForUser } from '../service/users';

const SearchUser: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const lastSerachTextRef = useRef(searchText);
  lastSerachTextRef.current = searchText;

  // trigger search when text changes
  useEffect(() => {
    if (searchText) {
      searchForUser(searchText).then((list) => {
        if (searchText === lastSerachTextRef.current) {
          setSearchResult(list);
        }
      });
    } else {
      setSearchResult([]);
    }
  }, [searchText]);

  const handleAddPerson = (person: string) => {
    setSelected((it) => it.concat(person));
    setSearchText('');
  };

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
      <ul>
        {searchResult.map((name, index) => (
          <a
            key={index}
            href="#"
            onClick={(ev) => {
              ev.preventDefault();
              handleAddPerson(name);
            }}
          >
            <li>{name}</li>
          </a>
        ))}
      </ul>

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
