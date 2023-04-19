import Guitarra from "./guitarra"




export default function ListadoGuitarras({guitarras}) {

  return (
    <>
        <h2 className="heading">Nuestra Coleccion</h2>
          {guitarras.data.length && (
            <div className="guitarras-grid">
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
    </>
  )
}
