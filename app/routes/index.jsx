import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listado-guitarras"
import ListadoPost from "~/components/listado-posts"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/post.server"
import stylesGuitarras from "~/styles/guitarras.css"
import stylesBlog from "~/styles/blog.css"

export function meta(){

}

export function links(){
  return [ 
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesBlog
    },
  ]
}

export async function loader(){

  const [guitarras, posts] = await Promise.all([
    getGuitarras(),
    getPosts()
  ])

  console.log(guitarras)
  console.log(posts)

  return {
    guitarras,
    posts : posts.data
  }
}

function Index() {
  const {
    guitarras,
    posts
  } = useLoaderData()


  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras}/>
      </main>

      <main className="contenedor">
        <ListadoPost posts={posts}/>
      </main>
    </>
  )
}

export default Index