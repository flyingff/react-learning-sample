const SearchUser: React.FC = () => {
  return (
    <div>
      <div>
        <span>Search for users: </span>
        <input />
      </div>
      <ul>
        <a>
          <li>san.zhang</li>
        </a>
        <a>
          <li>si.li</li>
        </a>
      </ul>
      <p>Selected users:</p>
      <ol>
        <li>wu.wang</li>
      </ol>
    </div>
  );
};

export default SearchUser;
