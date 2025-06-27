//1st method simple with no tailwindcss

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/api/products')
//       .then(res => res.json())
//       .then(data => setProducts(data));
//   }, []);

//   const filteredProducts = products.filter(p =>
//     p.category.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         className="border p-2 mb-4"
//         placeholder="Filter by category"
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//       />
//       <ul>
//         {filteredProducts.map(p => (
//           <li key={p.id} className="mb-2">
//             <Link className="text-blue-500" to={`/product/${p.id}`}>
//               {p.name} - ${p.price}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;


//2nd method simple tailwind css

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/api/products')
//       .then(res => res.json())
//       .then(data => setProducts(data));
//   }, []);

//   const filteredProducts = products.filter(p =>
//     p.category.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className="max-w-3xl mx-auto">
//       <input
//         className="w-full border border-blue-300 rounded-lg p-3 mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//         placeholder="🔍 Filter by category (e.g., Electronics, Clothing)"
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//       />
//       <ul className="space-y-4">
//         {filteredProducts.map(p => (
//           <li key={p.id} className="bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300 p-4 flex justify-between items-center">
//             <div>
//               <Link className="text-lg font-semibold text-blue-600 hover:underline" to={`/product/${p.id}`}>
//                 {p.name}
//               </Link>
//               <p className="text-sm text-gray-500">{p.category}</p>
//             </div>
//             <div className="text-right">
//               <span className="text-green-600 font-bold">${p.price}</span>
//             </div>
//           </li>
//         ))}
//         {filteredProducts.length === 0 && (
//           <p className="text-center text-gray-500">No products match your filter.</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;


//3rd method without images

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function ProductList({ darkMode }) {
//   const [products, setProducts] = useState([]);
//   const [filter, setFilter] = useState('');
//   const [sortOrder, setSortOrder] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/products')
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data);
//         setLoading(false);
//       });
//   }, []);

//   const filteredProducts = products
//     .filter(p => !filter || p.category.toLowerCase() === filter.toLowerCase())
//     .sort((a, b) => {
//       if (sortOrder === 'low') return a.price - b.price;
//       if (sortOrder === 'high') return b.price - a.price;
//       return 0;
//     });

//   return (
//     <div className="max-w-3xl mx-auto">
//       <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
//         <select
//           className={`border rounded-lg p-2 mb-2 md:mb-0 shadow-sm w-full md:w-auto text-gray-800
//             ${darkMode ? 'bg-gray-800 border-gray-600 text-black' : 'border-blue-300'}
//           `}
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option value="">All Categories</option>
//           <option value="Electronics">Electronics</option>
//           <option value="Clothing">Clothing</option>
//           <option value="Footwear">Footwear</option>
//         </select>

//         <select
//           className={`border rounded-lg p-2 shadow-sm w-full md:w-auto  text-gray-800
//             ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'border-blue-300'}
//           `}
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//         >
//           <option value="">Sort By</option>
//           <option value="low">Price: Low to High</option>
//           <option value="high">Price: High to Low</option>
//         </select>
//       </div>

//       {loading ? (
//         <div className="text-center">
//           <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
//           <p className="text-gray-500 mt-2">Loading products...</p>
//         </div>
//       ) : (
//         <ul className="space-y-4">
//           {filteredProducts.map(p => (
//             <li
//               key={p.id}
//               className={`rounded-lg shadow p-4 flex justify-between items-center
//                 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}
//                 hover:shadow-lg transform hover:scale-105 transition duration-300
//               `}
//             >
//               <div>
//                 <Link className="text-lg font-semibold text-blue-400 hover:underline" to={`/product/${p.id}`}>
//                   {p.name}
//                 </Link>
//                 <p className="text-sm text-gray-400">{p.category}</p>
//               </div>
//               <div className="text-right">
//                 <span className="text-green-400 font-bold">${p.price}</span>
//                 {Math.random() > 0.7 && (
//                   <span className="ml-2 bg-yellow-300 text-yellow-900 text-xs font-semibold px-2 py-0.5 rounded">
//                     Sale
//                   </span>
//                 )}
//               </div>
//             </li>
//           ))}
//           {filteredProducts.length === 0 && (
//             <p className="text-center text-gray-500">No products match your criteria.</p>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default ProductList;


//4th Method with images

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList({ darkMode }) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://product-catalog-backend-project-production.up.railway.app/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products
    .filter(p => !filter || p.category.toLowerCase() === filter.toLowerCase())
    .sort((a, b) => {
      if (sortOrder === 'low') return a.price - b.price;
      if (sortOrder === 'high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
        <select
          className={`border rounded-lg p-2 mb-2 md:mb-0 shadow-sm w-full md:w-auto text-gray-800 
            ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'border-blue-300'}
          `}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Footwear">Footwear</option>
          <option value="Furniture">Furniture</option>
          <option value="Food">Food</option>
        </select>

        <select
          className={`border rounded-lg p-2 shadow-sm w-full md:w-auto text-gray-800
            ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'border-blue-300'}
          `}
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-500 mt-2">Loading products...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 hover:cursor-pointer">
          {filteredProducts.map(p => (
            <div
              key={p.id}
              className={`rounded-lg shadow p-4 flex flex-col hover:shadow-lg transform hover:scale-105 transition duration-300
                ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}
              `}
            >
             <img
  src={`/images/${p.image}`}
  alt={p.name}
  className="w-full h-60 object-containe rounded mb-3"
/>
              <div className="flex-1">
                <Link className="text-lg font-semibold text-blue-400 hover:underline" to={`/product/${p.id}`}>
                  {p.name}
                </Link>
                <p className="text-sm text-gray-400">{p.category}</p>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-green-400 font-bold">${p.price}</span>
                {Math.random() > 0.7 && (
                  <span className="ml-2 bg-yellow-300 text-yellow-900 text-xs font-semibold px-2 py-0.5 rounded">
                    Sale
                  </span>
                )}
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500">No products match your criteria.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductList;
