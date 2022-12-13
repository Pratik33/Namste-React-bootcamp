import { useState } from 'react';

const searchLogin = (searchKey, data) => {
  return data.filter((team) => {
    return (
      team?.name?.toLowerCase().includes(searchKey.toLowerCase()) ||
      team?.company?.toLowerCase().includes(searchKey.toLowerCase()) ||
      team?.login?.toLowerCase().includes(searchKey.toLowerCase())
    );
  });
};
const SearchComponent = ({ data, setFilteredList, setIsMemberPresent }) => {
  const [searchKey, setSearchKey] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const filteredList = searchLogin(searchKey, data);
        filteredList.length === 0
          ? setIsMemberPresent(false)
          : setIsMemberPresent(true);
        setFilteredList(filteredList);
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
