'use client';

import React, { useEffect, useState } from 'react';

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Page: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://67275e87270bd0b97551c8c8.mockapi.io/danhlhse172387'); // Replace with your API endpoint
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <main style={{ flex: '1', padding: '1rem' }}>
        <h1>Items</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {items.map(item => (
            <div key={item.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
              <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: 'auto' }} />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;