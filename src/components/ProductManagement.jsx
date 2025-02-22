import React, { useState } from 'react';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
    stock: 0,
    isAvailable: true
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageUpload = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  const addProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
      setNewProduct({
        name: '',
        price: '',
        description: '',
        image: null,
        stock: 0,
        isAvailable: true
      });
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const toggleAvailability = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, isAvailable: !product.isAvailable } : product
    ));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Product Management</h1>

      {/* Add Product Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Stock</label>
            <input
              type="number"
              name="stock"
              value={newProduct.stock}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Image</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="mt-1 w-full"
            />
          </div>
        </div>
        <button
          onClick={addProduct}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>

      {/* Product List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Product List</h2>
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Stock</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b">
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    {product.image && (
                      <img
                        src={URL.createObjectURL(product.image)}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded mr-3"
                      />
                    )}
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.description}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">${product.price}</td>
                <td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={product.isAvailable}
                      onChange={() => toggleAvailability(product.id)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900">
                      {product.isAvailable ? 'Available' : 'Disabled'}
                    </span>
                  </label>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
