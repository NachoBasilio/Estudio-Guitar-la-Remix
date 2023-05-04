import styles from '~/styles/carrito.css'
import { useOutletContext } from '@remix-run/react'
import { useEffect, useState } from 'react'


export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
  ]
}

export function meta() {
    return{ 
        title: 'GuitarLA - Carrito de compras',
        description: 'GuitarLA, carrito de compras'
    }
}

function Carrito() {
  const [total, setTotal] = useState(0)
  const {carrito, actualizarCantidad, eliminarGuitarra} = useOutletContext()

  useEffect(()=>{
    const calculoTotal = carrito.reduce((acc, producto)=> acc + (producto.precio * producto.cantidad), 0)
    setTotal(calculoTotal)
  }
  ,[carrito])
  return (
    <main className='contenedor'>
        <h1 className='heading'>Carrito de compras</h1>
        <div className='contenido'>
            <div className='carrito'>
              <h2>Articulos</h2>
              {carrito?.length === 0 ? 'Carrito vacio': (
                carrito?.map(producto=>(
                  <div key={producto.key} className='producto'>
                    <div>
                      <img src={producto.imagen} alt={"imagen del producto" + producto.nombre} />
                    </div>
                    <div>
                      <p className="nombre">{producto.nombre}</p>
                      <p className=''>Cantidad: </p>
                      <select 
                      value={producto.cantidad}
                      className='select'
                      onChange={(e)=>{
                        actualizarCantidad({
                          cantidad: +e.target.value,
                          id: producto.id
                        })
                      }}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <p className='precio'>$ <span>{producto.precio}</span></p>
                      <p className='subtotal'>Subtotal: $ <span>{producto.precio * producto.cantidad}</span></p>
                    </div>
                    <button
                    type='button'
                    className='btn-eliminar'
                    onClick={()=>eliminarGuitarra(producto.id)}
                    >X</button>
                  </div>
                ))
              )}
            </div>
            <aside className='resumen'>
                <h3>Resumen del pedido</h3>
                <p>Total a pagar: ${total}</p>
            </aside>

        </div>
    </main>
  )
}

export default Carrito