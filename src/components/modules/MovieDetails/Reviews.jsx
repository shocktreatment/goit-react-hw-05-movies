import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  const getReviewById = async revId => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${revId}/reviews?api_key=9ec6001a7af70e1d00b5565b52b6b615&language=en-US&page=1`
    );
    return data;
  };

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const data = await getReviewById(id);
        setReviews(data.results);
        console.log('REVIEWS->', data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchReview();
  }, [id]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h3>
        <b>Author: {author}</b>
      </h3>
      <p>{content}</p>
    </li>
  ));
  return (
    <>
      {/* <h2>REVIEWS</h2> */}
      {Boolean(!reviews.length)  && <p>We don`t have any reviews for this movie.</p>}
      <ul>{elements}</ul>
    </>
  );
};
export default Reviews;
