import axios from "axios";
import { useState, useEffect } from "react";

const Hooson = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get("https://dev.to/api/articles").then((response) => {
                setArticles(response.data);
            })
    }, []);

    return (
        <div>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Hooson;



