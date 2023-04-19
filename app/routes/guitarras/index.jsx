import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listado-guitarras"
import { getGuitarras } from "~/models/guitarras.server"


export async function loader(){
  const guitarras = await getGuitarras()

  return guitarras
}

function Tienda() {
  const guitarras = useLoaderData()

  return (
      <ListadoGuitarras
        guitarras={guitarras}
      ></ListadoGuitarras>
  )
}

export default Tienda