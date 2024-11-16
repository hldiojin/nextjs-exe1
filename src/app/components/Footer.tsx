import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '1rem', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} My Next.js App</p>
    </footer>
  );
};

export default Footer;