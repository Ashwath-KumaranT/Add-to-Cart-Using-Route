import React, { useEffect, useState } from 'react';

function ProductList({ cartItems, toggleCartItem }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.length > 0 ? (
        products.map((product) => {
          const isInCart = cartItems.some((item) => item.id === product.id);
          return (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-red-500">${product.price.toFixed(2)}</p>
              <button
                onClick={() => toggleCartItem(product)}
                className={`mt-2 py-2 px-4 rounded font-semibold ${
                  isInCart
                    ? 'bg-red-500 text-white'
                    : 'bg-blue-500 text-white'
                }`}
              >
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
              </button>
            </div>
          );
        })
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default ProductList;
