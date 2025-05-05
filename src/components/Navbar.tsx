import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-primary no-underline">
          <MapPin size={28} className="text-accent" />
          <span className="font-heading text-2xl font-bold">TravelStory</span>
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/canvas" className="btn btn-primary">
            Create Story
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;