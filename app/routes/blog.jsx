import { useLoaderData } from "@remix-run/react"
import Post from "~/components/post"
import { getPosts } from "~/models/post.server"
import styles from "~/styles/blog.css"


export async function loader(){
  const posts = await getPosts()
  return posts.data
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
  ]
}

function Blog() {
  const posts = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">
        <div className="blog">
          {posts.map(post=>(
            <Post 
            key={post.id}
            post={post.attributes}
            ></Post>
          ))}
        </div>
      </h2>
    </main>
  )
}

export default Blog