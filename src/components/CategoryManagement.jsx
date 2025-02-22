import React, { useState } from 'react';
import Navbar from '../components/Navbar'

const CategoryManagement = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electronics', parentId: null },
    { id: 2, name: 'Food', parentId: 1 },
    { id: 3, name: 'Clothing', parentId: null }
  ]);
  const [newCategory, setNewCategory] = useState({
    name: '',
    parentId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  const addCategory = () => {
    if (newCategory.name) {
      const category = {
        id: Date.now(),
        name: newCategory.name,
        parentId: newCategory.parentId || null
      };
      setCategories([...categories, category]);
      setNewCategory({ name: '', parentId: '' });
    }
  };

  const getCategoryHierarchy = (parentId = null) => {
    return categories
      .filter(category => category.parentId === parentId)
      .map(category => ({
        ...category,
        children: getCategoryHierarchy(category.id)
      }));
  };

  const renderCategories = (categories) => {
    return (
      <ul className="shadow-sm w-1/2 p-4">
        <h1 className='mb-4 font-bold text-lg'>List of Categories</h1>
        {categories.map(category => (
          <li key={category.id} className="mb-4">
            <div className="flex items-center justify-between    ">
              <span className="font-medium text-gray-800">{category.name}</span>
              <div>
                <button className="text-white bg-blue-400 border p-1 rounded-lg border-gray-200 hover:text-blue-700 ml-2">Edit</button>
                <button className="text-white bg-red-400 border p-1 rounded-lg border-gray-200 hover:text-red-700 ml-2">Delete</button>
              </div>
            </div>
            {category.children && (
              <div className="ml-4 mt-2">
                {renderCategories(category.children)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex">
      <Navbar />
      <div className='w-full p-4 flex flex-col'>
        <h1 className="text-2xl font-bold mb-4 text-[#7067DB]">Category Management</h1>
        <div className="mb-4 flex flex-col w-1/3 gap-4">
          <h1 className='font-bold'>Create a new category</h1>
          <div className='w-full'> <h1 className='mb-1'>Enter the category name</h1>
        <input
          type="text"
          name="name"
          placeholder="Category Name"
          value={newCategory.name}
          onChange={handleInputChange}
          className="p-2 border rounded mr-2 w-full"
        /> </div>

        <div>
            <h1 className='mb-1'>Select the parent category</h1>
        <select
          name="parentId"
          value={newCategory.parentId}
          onChange={handleInputChange}
          className="p-2 border rounded mr-2 w-full"
        >
          <option value="">Select </option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select> </div>
        <button
          onClick={addCategory}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Category
        </button>
      </div>
    
        <div>
        {renderCategories(categories)}</div>    </div>
      </div>

  );
};

export default CategoryManagement;
