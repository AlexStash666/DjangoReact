import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function PostDetail({match}){

    const [post, setPosts] = useState({})
    const id = match.params.id

    useEffect(() =>{
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/blogpost/${id}/`
        }).then(response => {
            setPosts(response.data)
        })
    }, [id])

    return (
        <div>
            Post with id {post.id}
            <p>Title: <strong>{post.title}</strong></p>
            <hr/>
        </div>
    )
}

export default PostDetail;