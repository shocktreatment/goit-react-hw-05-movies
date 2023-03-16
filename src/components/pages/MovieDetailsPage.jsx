import { useState, useEffect } from 'react';
// import { useCallback } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import axios from 'axios';

const MovieDetails = () => {
  const [film, setFilm] = useState();
  const { id } = useParams();
  console.log('SMP-> ', id);

  const navigate = useNavigate();

  const location = useLocation();
  console.log('location', location);
  const from = location.state?.from || '/';
  console.log('from', from);

  useEffect(() => {
    const getFilmById = async filmId => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${filmId}?api_key=9ec6001a7af70e1d00b5565b52b6b615&language=en-US`
      );
      console.log('data', data);
      return data;
    };

    const fetchFilm = async () => {
      try {
        const result = await getFilmById(id);
        setFilm(result);
        console.log('result', result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchFilm();
  }, [id]);

  // const goBack = useCallback(() => navigate(-1), [navigate]);
  // const goBack = useCallback(() => navigate(from), [navigate]);
  const goBack = () => navigate(from);

  return (
    <div
      style={{
        padding: '2px',
      }}
    >
      <button onClick={goBack} style={{ margin: '5px 0px 0px 0px' }}>
        Go back
      </button>
      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <div
          style={{
            // backgroundColor: '#d6ccc2',
            display: 'flex',
            // width: '200px',
            // height: '300px',
            marginTop: '10px',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0px',
          }}
        >
          <img src={`https://image.tmdb.org/t/p/w300/${film?.poster_path}`} alt={film?.title} />
        </div>

        <div>
          <h1>
            {film?.title} ({film?.release_date.slice(0, 4)})
          </h1>
          <p>User Score: {Math.round(film?.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{film?.overview}</p>
          <h2>Genres</h2>
          <ul
            style={{
              display: 'flex',
              gap: '10px',
              listStyle: 'none',
              padding: '0px',
            }}
          >
            {film?.genres.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>

      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" state={{ from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};
export default MovieDetails;

////.getFullYear()
