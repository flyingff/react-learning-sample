import React, { Suspense, useEffect, useRef, useState } from 'react';
import { searchForUser } from '../service/users';

class SearchResult {
  private promise: Promise<string[]>;
  private resolved?: string[];
  public lastResult?: SearchResult;

  public constructor(promise: Promise<string[]>, lastResult?: SearchResult) {
    this.promise = promise;
    promise.then((list) => {
      this.resolved = list;
      // prevent memory leak
      this.lastResult = undefined;
    });
    this.lastResult = lastResult;
  }

  public get resolvedList() {
    if (!this.resolved) {
      throw this.promise;
    }
    return this.resolved!;
  }
}

const AsyncSearchList: React.FC<{
  searchResult: SearchResult;
  onAddPerson: (person: string) => void;
}> = ({ searchResult, onAddPerson }) => {
  return (
    <Suspense
      fallback={
        searchResult.lastResult ? (
          <AsyncSearchList
            searchResult={searchResult.lastResult}
            onAddPerson={onAddPerson}
          />
        ) : (
          <div>loading...</div>
        )
      }
    >
      <SearchList searchResult={searchResult} onAddPerson={onAddPerson} />
    </Suspense>
  );
};

const SearchList: React.FC<{
  searchResult: SearchResult;
  onAddPerson: (person: string) => void;
}> = ({ searchResult, onAddPerson }) => {
  return (
    <ul>
      {searchResult.resolvedList.map((name, index) => (
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
  const [searchResult, setSearchResult] = useState<SearchResult>(
    () => new SearchResult(Promise.resolve([]))
  );
  const [selected, setSelected] = useState<string[]>([]);

  // trigger search when text changes
  useEffect(() => {
    const promise = searchText
      ? searchForUser(searchText)
      : Promise.resolve([]);
    setSearchResult((last) => new SearchResult(promise, last));
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
      <AsyncSearchList
        searchResult={searchResult}
        onAddPerson={handleAddPerson}
      />

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
