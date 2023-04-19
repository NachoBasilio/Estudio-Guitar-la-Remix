//Require
import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/post.server"
import { getCurso } from "~/models/curso.server"
//Components
import ListadoGuitarras from "~/components/listado-guitarras"
import ListadoPost from "~/components/listado-posts"
import Curso from "~/components/curso"
//Styles
import stylesGuitarras from "~/styles/guitarras.css"
import stylesBlog from "~/styles/blog.css"
import stylesCurso from "~/styles/curso.css"

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
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader(){

  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])


  return {
    guitarras,
    posts:posts.data,
    curso:curso.data

  }
}

function Index() {
  const {
    guitarras,
    posts,
    curso
  } = useLoaderData()


  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras}/>
      </main>

      <Curso
      curso={curso.attributes}
      />

      <main className="contenedor">
        <ListadoPost posts={posts}/>
      </main>
    </>
  )
}

export default Index