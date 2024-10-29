import { useState, useEffect } from 'react';
import type { Product } from '../types';

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Fresh Strawberries',
    category: 'fruits',
    price: 4.99,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Sweet and juicy strawberries from local farms',
    expiryDate: '2024-03-25'
  },
  {
    id: '2',
    name: 'Organic Spinach',
    category: 'vegetables',
    price: 2.99,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Fresh organic spinach leaves',
    expiryDate: '2024-03-20'
  },
  {
    id: '3',
    name: 'Whole Milk',
    category: 'dairy',
    price: 3.49,
    stock: 75,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Fresh whole milk from local dairy farms',
    expiryDate: '2024-03-22'
  }
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (product: Product) => {
    setProducts([...products, { ...product, id: String(products.length + 1) }]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct
  };
}