import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ query });
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
export { SearchBar };
  
  
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
