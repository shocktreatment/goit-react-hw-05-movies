import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './searchbar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ query });
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          onChange={e => setQuery(e.target.value)}
          value={query}
          className={s.input}
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
