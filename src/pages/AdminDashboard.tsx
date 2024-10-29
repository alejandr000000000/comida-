import React, { useState } from 'react';
import { Plus, AlertTriangle } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import type { Product } from '../types';

export default function AdminDashboard() {
  const { products, updateProduct, addProduct } = useProducts();
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    category: 'fruits',
    price: 0,
    stock: 0,
    description: '',
    image: '',
    expiryDate: ''
  });

  const expiringProducts = products.filter(product => {
    const daysUntilExpiry = Math.ceil(
      (new Date(product.expiryDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
    );
    return daysUntilExpiry <= 7;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price && newProduct.stock) {
      addProduct(newProduct as Product);
      setIsAddingProduct(false);
      setNewProduct({
        name: '',
        category: 'fruits',
        price: 0,
        stock: 0,
        description: '',
        image: '',
        expiryDate: ''
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => setIsAddingProduct(true)}
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-emerald-700"
        >
          <Plus size={20} />
          <span>Add Product</span>
        </button>
      </div>

      {/* Expiring Products Alert */}
      {expiringProducts.length > 0 && (
        <div className="mb-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex items-center">
            <AlertTriangle className="text-yellow-400 mr-3" />
            <div>
              <h3 className="text-yellow-800 font-medium">
                Products Expiring Soon ({expiringProducts.length})
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                {expiringProducts.map(product => (
                  <div key={product.id}>
                    {product.name} - Expires: {new Date(product.expiryDate).toLocaleDateString()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product List */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Expiry Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {product.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(product.expiryDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => {}}
                    className="text-emerald-600 hover:text-emerald-900"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {isAddingProduct && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              {/* Add more form fields for other product properties */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsAddingProduct(false)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}