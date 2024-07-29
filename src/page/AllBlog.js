import React from "react";
import BlogImage1 from "../assets/image.jpeg";
import BlogImage2 from "../assets/Rectangle 38 (1).jpg";
import BlogImage3 from "../assets/Rectangle 38.png";
import BlogImage4 from "../assets/Rectangle 38 (2).jpg";
import BlogImage5 from "../assets/Rectangle 38 (1).png";
import BlogImage6 from "../assets/Rectangle 38 (2).png";
import BlogImage7 from "../assets/Rectangle 38 (3).png";
import BlogImage8 from "../assets/Rectangle 38 (4).png";
import BlogImage9 from "../assets/Rectangle 38 (5).png";
import { Link } from "react-router-dom";

const AllBlog = () => {
  const posts = [
    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      imageUrl: BlogImage1,
      date: "August 20, 2022",
    },
    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Design",
      imageUrl: BlogImage2,
      date: "August 20, 2022",
    },
    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      imageUrl: BlogImage3,
      date: "August 20, 2022",
    },
    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      imageUrl: BlogImage4,
      date: "August 20, 2022",
    },
    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Software",
      imageUrl: BlogImage5,
      date: "August 20, 2022",
    },
    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      imageUrl: BlogImage6,
      date: "August 20, 2022",
    },
    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      imageUrl: BlogImage7,
      date: "August 20, 2022",
    },
    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      imageUrl: BlogImage8,
      date: "August 20, 2022",
    },
    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      imageUrl: BlogImage9,
      date: "August 20, 2022",
    },
    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      imageUrl: BlogImage7,
      date: "August 20, 2022",
    },
    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      imageUrl: BlogImage8,
      date: "August 20, 2022",
    },
    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      imageUrl: BlogImage9,
      date: "August 20, 2022",
    },
  ];
  return (
    <div>
      <div className="mt-20 w-[1216px] mx-auto">
        <h2 className="text-2xl font-bold mb-4">AllBlogPost</h2>

        <div className="grid grid-cols-3 gap-4 mt-10">
          {posts.map((post, index) => (
            <div key={index} className="border rounded-md p-4 shadow-md">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <span className="text-blue-500">{post.category}</span>
              <Link to="/SinglePost">
                {" "}
                <h3 className="text-lg font-bold">{post.title}</h3>
              </Link>
              <p className="text-gray-600">{post.date}</p>
            </div>
          ))}
          <div className="flex justify-center w-[1216px]">
            <button className="border-solid border-2 py-3 px-5 rounded text-gray-500 mt-40">
              LoadMore
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AllBlog;
