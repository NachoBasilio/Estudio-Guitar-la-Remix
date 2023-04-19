import { useLoaderData } from "@remix-run/react"
import ListadoPost from "~/components/listado-posts"
import { getPosts } from "~/models/post.server"


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



function Blog() {
  const posts = useLoaderData()

  return (
    <ListadoPost posts={posts}></ListadoPost>
  )
}

export default Blog