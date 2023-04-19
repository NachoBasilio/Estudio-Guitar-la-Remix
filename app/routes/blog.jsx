import { useLoaderData } from "@remix-run/react"
import ListadoPost from "~/components/listado-posts"
import { getPosts } from "~/models/post.server"
import styles from "~/styles/blog.css"

export function meta (){
  return {
    title: "GuutarLA - Nuestro Blog",
    description: "GuitarLA, blog de musica y venta de ins"
  }
}

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
      <ListadoPost posts={posts}></ListadoPost>
    </main>
  )
}

export default Blog