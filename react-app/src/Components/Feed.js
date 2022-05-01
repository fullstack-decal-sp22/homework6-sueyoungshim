import React from 'react';
import Post from "./Post";
import NewPost from "./NewPost";

const Feed = () => {

  const [entry, setEntry] = useState([]);



  const getPostData = () => {
    axios
      .get("http://localhost:3002/posts")
      .then((entry) => setEntry(entry.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPostData();
  });

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
      {
        data.map(d =>
          <Post title={d.title} body={d.body} key={d.id} comments={d.comments} postId={d.id} />
        )
      }
      <NewPost />
    </div>
  )
}
export default Feed;
