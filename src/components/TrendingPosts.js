import React from "react";

const TrendingPosts = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <div>No trending posts available</div>;
  }

  return (
    <div className="w-[1216px] mx-auto">
      <h2 className="text-xl font-bold mb-4">Trending</h2>
      <div className="flex overflow-x-auto scrollbar-hidden gap-4">
        {posts.map((post, index) => (
          <div key={index} className="flex-shrink-0 shadow-md relative w-80">
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full h-80 object-cover rounded-md"
            />
            <div className="absolute bottom-4 left-4 right-4 p-2 rounded-md bg-black bg-opacity-50">
              <p className="bg-blue-500 block text-white w-[90px] font-bold rounded">
                {post.category}
              </p>
              <p className="text-lg font-bold text-white">{post.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
