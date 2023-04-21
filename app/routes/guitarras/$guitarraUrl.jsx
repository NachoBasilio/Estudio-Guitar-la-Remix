import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"
import styles from '~/styles/guitarras.css'

export async function loader({request, params}){
  const {guitarraUrl} = params
  console.log(params)
  const guitarra = await getGuitarra(guitarraUrl)
  
  if(guitarra.data.length === 0){
    throw new Response("", {
      status:404,
      statusText: "Guitarra No Encontrada"
    })
  }
 
  return guitarra
}


export function meta({data}) {
  if(!data){
    return {
      title: `GuitarLA - 404`,
      descripcion: `Guitarra, venta de guitarra: Guitarra no encontrada`
    }
  }

  return(
    {
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        descripcion: `Guitarra, venta de guitarra: ${data.data[0].attributes.nombre}`,
    }
)
}

export function links(){
    return [
      {
        rel: 'stylesheet',
        href: styles
      },
    ]
}

export default function Guitarra() {
    const guitarra = useLoaderData()
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes
    return (
        <main className="contenedor guitarra">
            <img className="imagen" src={imagen.data.attributes.url} alt={"imagen de la guitarra "+nombre} />

            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">${precio}</p>

                <form className="formulario">
                    <label htmlFor="cantidad">Cantidad</label>
                    <select name="" id="cantidad">
                        <option value="">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input 
                    type="submit"
                    value="Agregar al carrito"                     
                    />
                </form>
            </div>
        </main>
        
    )
}
