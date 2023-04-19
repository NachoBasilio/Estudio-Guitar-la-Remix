import Post from "./post"

export default function ListadoPost({posts}) {
  return (
    <div>
        <h2 className="heading">Blog</h2>
        <div className="blog">
            {posts.map(post=>(
                <Post 
                key={post.id}
                post={post.attributes}
                ></Post>
            ))}
        </div>
    </div>
  )
}
