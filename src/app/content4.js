import { useEffect, useState } from "react";

export default function Content4() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getPost() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const data = await res.json();
      setPosts(data);
      console.log("testdata", data);
    }
    getPost();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Table</h2>

     
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "15px",
          padding: "8px",
          width: "300px",
          fontSize: "16px"
        }}
      />

      <table style={{ border: "solid 2px black", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>
                <a href={`/contact?id=${post.id}`}>{post.title}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
