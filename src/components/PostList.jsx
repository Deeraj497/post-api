
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './PostList.css';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);
    const postsPerPage = 5;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: currentPage,
                        _limit: postsPerPage
                    }
                });
                setPosts(res.data);
                setTotalPosts(parseInt(res.headers['x-total-count']) || 100);
            } catch (err) {
                console.error('Error fetching posts', err);
            }
        };
        fetchPosts();
    }, [currentPage]);

    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="list-container">
            <h2>All Posts</h2>
            {posts.map(({ id, title }) => (
                <div key={id} className="List-title">
                    <Link to={`/posts/${id}`} className="List-link">
                        {title}
                    </Link>
                </div>
            ))}
            <div className="pagination">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                {[...Array(totalPages)].map((_, idx) => (
                    <button
                        key={idx + 1}
                        onClick={() => handlePageChange(idx + 1)}
                        className={currentPage === idx + 1 ? 'active' : ''}
                    >
                        {idx + 1}
                    </button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default PostList;