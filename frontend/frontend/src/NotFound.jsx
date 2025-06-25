import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Not Found</h1>
      <p className="text-gray-600 mb-4">The page you are looking for does not exist.</p>
      <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" to="/">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
