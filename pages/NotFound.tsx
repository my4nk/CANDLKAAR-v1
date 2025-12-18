
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-serif text-accent/20 mb-4 italic">404</h1>
      <h2 className="text-4xl font-serif mb-8 italic">Flickered Out</h2>
      <p className="text-text-muted mb-12 max-w-md">
        The page you are looking for has vanished like smoke in the wind. Let's get you back to the collection.
      </p>
      <Link to="/shop">
        <Button>Return to Shop</Button>
      </Link>
    </div>
  );
};
