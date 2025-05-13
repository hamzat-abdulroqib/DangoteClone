import { useState, useEffect } from "react";
import axios from "axios";
import Myblog from "./BlogCard";
import React from "react";

const BlogCatelogue = () => {
  let topic = "business";
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${topic}&apiKey=d150fc1afee14418a84c411131272867`
        );
        setArticles(response.data.articles.slice(0, 15));
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    getArticles();
  }, []);

  return (
    <div className="container py-5">
      <div className="row">
        {articles.map((article, index) => (
          <Myblog
            key={article.url || index}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToimage={article.urlToImage}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCatelogue;
