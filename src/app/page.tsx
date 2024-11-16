'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


interface Item {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  condition: string;
  owner_id: string;
  available: boolean;
  created_at: string;
  updated_at: string;
  quantity: number;
}

const Page: React.FC = () => {
  const router = useRouter();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://672f062d229a881691f19ad9.mockapi.io/api/items');
        const data: Item[] = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div  className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-6">
        <button 
          onClick={() => router.push('/product/create-product')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Create New Product
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {!item.available && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                  Sold Out
                </div>
              )}
            <button
                onClick={() => router.push(`/product/edit-product/${item.id}`)}
                className="absolute bottom-2 right-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
              >
                Edit
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">{item.name}</h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium hover:bg-blue-200 transition-colors duration-200 shadow-sm">
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Condition: {item.condition}</span>
                  <span>Qty: {item.quantity}</span>
                </div>
                <div className="text-xs text-gray-500">
                  Listed on: {new Date(item.created_at).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;