import React from 'react';
import { Truck, Shield, Clock } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

export default function HomePage() {
  const { products } = useProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fresh Food Delivered to Your Door
            </h1>
            <p className="text-xl mb-8">
              Premium fruits, vegetables, and dairy products from local farmers
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-emerald-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Same Day Delivery</h3>
              <p className="text-gray-600">Order before 2 PM for same-day delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-emerald-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction or money back</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-emerald-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Always Fresh</h3>
              <p className="text-gray-600">Direct from local suppliers daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => {}}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}