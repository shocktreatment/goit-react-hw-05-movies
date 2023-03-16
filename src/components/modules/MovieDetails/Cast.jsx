import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  const getCastById = async id => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9ec6001a7af70e1d00b5565b52b6b615&language=en-US`
    );
    return data;
  };

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getCastById(id);
        setCast(data.cast);
        console.log('CAST->', data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchCast();
  }, [id]);
  return (
    <>
      <h2>CAST</h2>
      <ul>
        {cast.map(({ name, id, profile_path, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w92${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
