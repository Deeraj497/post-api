
import React,{useEffect,useState} from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import './PostDetails.css';



function PostDetails() {
const {id}=useParams();
const [ post,setPost]=useState(null);
 


useEffect(() => {
    const fetchPost= async ()=>{
        try{
            const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            setPost(res.data);


} catch(err){
            console.error('error loading....',err)

        }
    };
    fetchPost();

},[id]);
if(!post) return<p>Loadinng.....</p>
const {userId,title,body}=post;

return (
          <div className="details-container">
          <h2>Title:      {title}</h2>
          <p id="id"><strong>Post ID:</strong> {id}</p>
          <p><strong>User ID:</strong> {userId}</p>
          <p>{body}</p>
          <Link to="/" className="Back-link"> ↞ Back to All Posts</Link>
        </div>
      );
}
export default PostDetails;
