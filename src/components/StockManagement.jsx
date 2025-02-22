import React, { useState } from 'react';
import Navbar from '../components/Navbar'

const StockManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', stock: 15 },
    { id: 2, name: 'Smartphone', stock: 30 },
    { id: 3, name: 'Headphones', stock: 50 }
  ]);
  const [stockUpdate, setStockUpdate] = useState({ id: null, quantity: 0 });

  const handleStockChange = (e) => {
    setStockUpdate({ ...stockUpdate, quantity: parseInt(e.target.value) });
  };

  const updateStock = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, stock: product.stock + stockUpdate.quantity } : product
    ));
    setStockUpdate({ id: null, quantity: 0 });
  };

  return (
    <div className="flex">

    <Navbar/>

    <div className='w-full p-4'>
      <h1 className="text-2xl font-bold mb-6 text-[#7067DB]">Stock Management</h1>

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-200 text-[#626262]">Product</th>
            <th className="px-4 py-2 border border-gray-200 text-[#626262]">Current Stock</th>
            <th className="px-4 py-2 border border-gray-200 text-[#626262]">Update Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="px-4 py-2 border border-gray-100 text-center">{product.name}</td>
              <td className="px-4 py-2 border border-gray-100 text-center">{product.stock}</td>
              <td className="px-4 py-2 border border-gray-100  text-center">
                {stockUpdate.id === product.id ? (
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={stockUpdate.quantity}
                      onChange={handleStockChange}
                      className="p-2 border rounded w-20 mr-2"
                    />
                    <button
                      onClick={() => updateStock(product.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Update
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setStockUpdate({ id: product.id, quantity: 0 })}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Update Stock
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default StockManagement;
