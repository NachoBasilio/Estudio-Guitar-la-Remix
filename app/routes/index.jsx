import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listado-guitarras"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/post.server"


getGuitarras

export function meta(){

}

export function links(){
  
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
    </>
  )
}

export default Index