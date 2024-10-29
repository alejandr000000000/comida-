import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-emerald-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">FreshMarket</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/products" className="hover:text-emerald-200">Products</Link>
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link to="/admin" className="hover:text-emerald-200">Admin Panel</Link>
                )}
                <Link to="/orders" className="hover:text-emerald-200">Orders</Link>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 hover:text-emerald-200"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 hover:text-emerald-200">
                <User size={20} />
                <span>Login</span>
              </Link>
            )}
            <Link to="/cart" className="relative hover:text-emerald-200">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}