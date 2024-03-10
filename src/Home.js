import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const params = {
                populate: {
                  image: {
                    fields: ["name", "width", "height", "url"]
                  },
                  author: {
                    populate: {
                      bioImage: {
                        fields: ["name", "width", "height", "url"]
                      }
                    }
                  },
                  category: {
                    populate: true,
                  },
                },
              }

            const response =  await axios.get('http://localhost:1337/api/articles', {params});
            setArticles(response.data.data);
        }

        getArticles();
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Latest Articles</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map(article => (
                    <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={`http://localhost:1337${article.attributes.image.data[0].attributes.url}`} alt={article.attributes.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{article.attributes.title}</h2>
                            <p className="text-gray-600 mb-4">{article.attributes.ReadingTime} min read</p>
                            <p className="text-gray-800">{article.attributes.Content.substring(0, 150)}...</p>
                            <a href="#" className="text-blue-600 font-bold">Read more</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
