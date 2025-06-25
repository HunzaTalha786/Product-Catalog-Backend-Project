// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${id}`)
//       .then(res => res.json())
//       .then(data => setProduct(data));
//   }, [id]);

//   if (!product) return <p>Loading...</p>;

//   if (product.error) return <p>{product.error}</p>;

//   return (
//     <div>
//       <h2 className="text-xl font-bold">{product.name}</h2>
//       <p>Category: {product.category}</p>
//       <p>Price: ${product.price}</p>
//       <Link className="text-blue-500" to="/">Back to list</Link>
//     </div>
//   );
// }

// export default ProductDetail;



import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center text-gray-500">Loading...</p>;
  if (product.error) return <p className="text-center text-red-500">{product.error}</p>;

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6 mt-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-2 animate-fadeIn">
        {product.name}
      </h2>
      <p className="text-gray-600 mb-1">Category: <span className="font-medium">{product.category}</span></p>
      <p className="text-green-600 font-bold text-xl mb-4">Price: ${product.price}</p>
      <Link
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        to="/"
      >
        ← Back to list
      </Link>
    </div>
  );
}

export default ProductDetail;
