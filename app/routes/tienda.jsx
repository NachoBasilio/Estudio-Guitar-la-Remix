import { useLoaderData } from "@remix-run/react"
import Guitarra from "~/components/guitarra"
import { getGuitarras } from "~/models/guitarras.server"
import styles from "~/styles/guitarras.css"

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
  ]
}

export async function loader(){
  const guitarras = await getGuitarras()

  return guitarras
}

function Tienda() {
  const guitarras = useLoaderData()
  console.log(guitarras.data)

  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra Coleccion</h2>
      {guitarras.data.length && (
        <div className="guitarra-grid">
          {
            guitarras.data.map( guitarra =>(
              <Guitarra
              key={guitarra.id}
              guitarra={guitarra?.attributes}
              />
            ))
          }
        </div>
      )}
    </main>
  )
}

export default Tienda