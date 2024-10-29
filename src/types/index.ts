export interface Product {
  id: string;
  name: string;
  category: 'fruits' | 'vegetables' | 'dairy';
  price: number;
  stock: number;
  image: string;
  description: string;
  expiryDate: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'customer';
  address?: string;
  phone?: string;
}

export interface Order {
  id: string;
  userId: string;
  products: Array<{
    productId: string;
    quantity: number;
  }>;
  totalAmount: number;
  status: 'pending' | 'processing' | 'delivered';
  deliveryAddress: string;
  paymentMethod: string;
  orderDate: string;
}