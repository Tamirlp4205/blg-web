import React, { useState } from 'react';
import FeaLogo from '../assets/FeaLogo';
import FeaLogo1 from '../assets/FeaLogo1';

const FeaturedPost = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFeaLogo1Click = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % posts.length);
  };

  const handleFeaLogoClick = () => {
    setCurrentIndex((currentIndex) => (currentIndex - 1 + posts.length) % posts.length);
  };

  const currentPost = posts[currentIndex];

  return (
    <div className="relative w-[1216px] mx-auto">
      <div className="rounded-md overflow-hidden">
        <img
          src={currentPost.cover_image}
          alt="Featured"
          className="w-full h-[600px]"
        />
      </div>
      <div className="absolute bottom-4 left-4 bg-white p-4 rounded-md shadow-md">
        <span className="bg-blue-400 text-white rounded font-bold m-1">{currentPost.slug}</span>
        <span className="bg-red-400 ml-1 text-white rounded font-bold m-1">{currentPost.comments_count}</span>
        <h2 className="text-xl font-bold">
          {currentPost.title}
        </h2>
        <p className="text-gray-600">{currentPost.readable_publish_date}</p>
      </div>
      <div className="flex absolute right-0 mt-8 gap-4">
        <button onClick={handleFeaLogoClick}>
          <FeaLogo />
        </button>
        <button onClick={handleFeaLogo1Click}>
          <FeaLogo1 />
        </button>
      </div>
    </div>
  );
};

export default FeaturedPost;
