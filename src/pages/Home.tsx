import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Image, Type, Save, FileVideo, FileDown } from 'lucide-react';
import anime from 'animejs';

const Home: React.FC = () => {
  React.useEffect(() => {
    anime({
      targets: '.feature-item',
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(100, {start: 300}),
      easing: 'easeOutQuad'
    });
    
    anime({
      targets: '.hero-content',
      translateY: [30, 0],
      opacity: [0, 1],
      delay: 200,
      duration: 800,
      easing: 'easeOutQuad'
    });
  }, []);

  return (
    <div>
      <section className="bg-[url('https://i.pinimg.com/736x/74/7f/28/747f280cb77d8705cccd732596a15bd2.jpg')] bg-cover bg-no-repeat text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white">
              Create Beautiful Travel Memories
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
              Design interactive travel journals with our easy-to-use canvas. Add photos,
              text, and more to create the perfect memento of your adventures.
            </p>
            <Link to="/canvas" className="btn bg-[#FFD93D] hover:bg-[#FFC107] text-[#2C3E50] btn-lg shadow-lg">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[url('https://i.pinimg.com/736x/63/e7/f7/63e7f7d7c9016118b7efb1971ef0e993.jpg')] py-16 bg-[#FDF6EC]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-item bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B6B] rounded-full text-white mb-4 shadow-lg">
                <Image size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Add Photos & Text</h3>
              <p className="text-gray-600">
                Upload your favorite travel photos and add descriptive text anywhere on the canvas.
              </p>
            </div>
            
            <div className="feature-item bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4ECDC4] rounded-full text-white mb-4 shadow-lg">
                <Type size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customize & Design</h3>
              <p className="text-gray-600">
                Freely arrange elements, customize text styles, and create your perfect layout.
              </p>
            </div>
            
            <div className="feature-item bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFD93D] rounded-full text-white mb-4 shadow-lg">
                <Save size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Save & Export</h3>
              <p className="text-gray-600">
                Save your work with beautiful animations and export as a video or PDF to share.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">Export Options</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="feature-item bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-[#FF6B6B] p-3 rounded-full mr-4 shadow-lg">
                  <FileVideo size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Generate Travel Video</h3>
                  <p className="text-gray-600">
                    Create a beautiful 5-10 second animated video of your journey that brings your memories to life through smooth transitions and effects.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="feature-item bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-[#4ECDC4] p-3 rounded-full mr-4 shadow-lg">
                  <FileDown size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Export as PDF</h3>
                  <p className="text-gray-600">
                    Download your travel journal as a high-quality PDF file that you can print or share with friends and family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-6 text-gray-600">Ready to Create Your Travel Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Start designing your interactive travel journal today and preserve your memories in a beautiful, shareable format.
          </p>
          <Link to="/canvas" className="btn btn-accent btn-lg">
            Create Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;