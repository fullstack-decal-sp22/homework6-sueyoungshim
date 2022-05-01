import Comment from './Comment';
import newComment from './new_comment';



const Post = ({ title, body, postId, comments }) => {

  return (
    <div style={{ textAlign: 'left', marginBottom: '12px' }}>
      <h3>
        {title}
      </h3>
      <p>{body}</p>
      {comments.map(d => {
        return <Comment comments={d} />
      })}
      <newComment postId={postId} />
    </div>
  )
}

export default Post;