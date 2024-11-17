import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const finalPrice = totalPrice * 0.9;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-indigo-600 mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 bg-white p-4 rounded-lg shadow"
            >
              <img src={item.image} alt={item.title} className="w-12 h-12" />
              <div className="text-gray-700">{item.title}</div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, 'decrease')}
                  className="bg-gray-300 px-2 rounded-l"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 'increase')}
                  className="bg-gray-300 px-2 rounded-r"
                >
                  +
                </button>
              </div>
              <div className="text-green-600 font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 text-lg font-semibold">
            Total Price: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="text-lg font-semibold">
            Final Price (10% Discount):{' '}
            <span className="text-green-600">${finalPrice.toFixed(2)}</span>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
      <Link
        to="/"
        className="mt-4 inline-block bg-indigo-500 text-white px-6 py-2 rounded-full"
      >
        Back to Products
      </Link>
    </div>
  );
}

export default Cart;
