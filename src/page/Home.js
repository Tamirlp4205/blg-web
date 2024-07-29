import React, { useState, useEffect } from "react";
import axios from "axios";
import FeaturedPost from "../components/FeaturedPost";
import TrendingPosts from "../components/TrendingPosts";
import AllBlogPost from "../components/AllBlogPost";
import LoadMore from "../components/LoadMore";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles")
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading articles: {error.message}</div>;

  return (
    <div className="flex gap-24 flex-col">
      <main className="container mx-auto mt-6 flex flex-col gap-24">
        <FeaturedPost posts={articles} />
        <TrendingPosts posts={articles} />
      </main>
      <AllBlogPost articles={articles} />
      <LoadMore />
    </div>
  );
};

export default Home;
