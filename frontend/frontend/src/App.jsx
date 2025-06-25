//1st method

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProductList from './ProductList';
// import ProductDetail from './ProductDetail';

// function App() {
//   return (
//     <Router>
//       <div className="p-4">
//         <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>
//         <Routes>
//           <Route path="/" element={<ProductList />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


//2nd Method


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProductList from './ProductList';
// import ProductDetail from './ProductDetail';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 p-6">
//         <header className="text-center mb-8">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 animate-pulse">
//             🛍️ Product Catalog
//           </h1>
//           <p className="text-gray-600 mt-2">Explore, Filter, and View Details</p>
//         </header>
//         <Routes>
//           <Route path="/" element={<ProductList />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


//3rd method

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import NotFound from './NotFound';
import { useState } from 'react';
function App() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200'} min-h-screen p-6`}>
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 animate-pulse">
            🛍️ Product Catalog
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-4 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}




export default App;
