import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllblogPosts = ({ articles }) => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filterPosts = (posts, filter) => {
    if (filter === "All") {
      return posts;
    } else {
      return posts.filter((post) => post.category === filter);
    }
  };

  const ChangingCategoryColor = (category) => {
    return filter === category ? "text-orange-300" : "text-black";
  };

  const filteredPosts = filterPosts(articles, filter);

  return (
    <div className="w-[1216px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Blog Posts</h2>
      <div className="flex font-bold mt-10 justify-between">
        <div className="flex gap-4">
          {["All", "Design", "Technology", "Software", "Travel", "Fashion", "Trending"].map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={ChangingCategoryColor(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div>
          <Link to="/AllBlog" className="text-blue-500">
            View All
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="border rounded-md p-4 shadow-md">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <span className="text-blue-500">{post.category}</span>
              <Link to={`/SinglePost/${post.id}`}>
                <h3 className="text-lg font-bold">{post.title}</h3>
              </Link>
              <p className="text-gray-600">{post.readable_publish_date}</p>
            </div>
          ))
        ) : (
          <div>No posts found</div>
        )}
      </div>
    </div>
  );
};

export default AllblogPosts;
