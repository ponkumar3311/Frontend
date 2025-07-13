"use client";
import { useEffect, useState } from "react";

export default function ContactUs() {
  const [post, setPost] = useState(null); 

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const fetchedId = queryParams.get("id");

    async function getPost() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${fetchedId}`);
      const data = await res.json();
      setPost(data);
      console.log("testdata", data);
    }

    if (fetchedId) {
      getPost();
    }
  }, []);

  return (
    <div>
      {post ? (
        < div style={{display:"flex", justifyContent:"space-evenly"}}>
          <h2 >{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
