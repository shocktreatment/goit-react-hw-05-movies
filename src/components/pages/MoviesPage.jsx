import { useState, useEffect } from 'react';
import axios from 'axios';

import { SearchBar } from '../modules/SearchBar/SearchBar';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  //   const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get('query');
  console.log('query=', value);

  const getMovie = async value => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=9ec6001a7af70e1d00b5565b52b6b615&language=en-US&query=${value}&page=1&include_adult=false`
    );
    console.log(data.results);
    return data;
  };
  useEffect(() => {
    if (value) {
      const fetchM = async () => {
        try {
          const data = await getMovie(value);
          setMovies(data.results);
        } catch ({ response }) {
          console.log(response.data.message);
        }
      };
      fetchM();
    }
  }, [value]);

  const searchPost = ({ query }) => {
    //   setValue(search);

    setSearchParams({ query });
  };
  const location = useLocation();

  const elements = movies.map(({ title, id }) => (
    <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
      <li>{title}</li>
    </Link>
  ));

  return (
    <>
      {/* <h1>MOVIES</h1> */}
      <SearchBar onSubmit={searchPost} />
      <ul>{elements}</ul>
    </>
  );
};
export default MoviesPage;
