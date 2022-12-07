import { useState } from 'react';
const searchLogin = (searchKey, data) => {
  return data.filter(
    (team) =>
      team.name.toLowerCase().includes(searchKey.toLowerCase()) ||
      team.designation.toLowerCase().includes(searchKey.toLowerCase())
  );
};
const SearchComponent = ({ data, setFilteredTeam }) => {
  const [searchKey, setSearchKey] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const filteredList = searchLogin(searchKey, data);
        setFilteredTeam(filteredList);
      }}>
      <input
        type='text'
        placeholder='Search ...'
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
      />
      <button className='btn btn-success'>Search</button>
    </form>
  );
};

export default SearchComponent;
