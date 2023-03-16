import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <p>
      <b style={{ marginRight: '10px' }}>Page is not found.</b>
      <Link to="/">Back home</Link>
    </p>
  );
};
export default NotFoundPage;
