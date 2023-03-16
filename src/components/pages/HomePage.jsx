import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=9ec6001a7af70e1d00b5565b52b6b615`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setPost(data.results);
      });
  }, []);

  const location = useLocation();

  return (
    <>
      <h1>Trending today</h1>
      {post && (
        <ul>
          {post.map(({ id, title }) => (
            <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
              <li>{title}</li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};
export default HomePage;
