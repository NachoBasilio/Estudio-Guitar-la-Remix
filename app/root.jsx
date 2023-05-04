import { useState, useEffect } from 'react'
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'




export function meta(){
    return(
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: "width=device-width,initial-scale=1"
        }
    )
}

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },

        {
            rel: 'preconnect',
            href: "https://fonts.googleapis.com"
        },
        {
            rel: 'preconnect',
            href: "https://fonts.gstatic.com" ,
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}





export default function App(){
    const carritoLS = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
    const [carrito, setCarrito] = useState(carritoLS)

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito))
    },[carrito])

    const agregarCarrito = guitarra => {
        if (!(carrito.some(guitarraState=>guitarraState.id === guitarra.id))){
            setCarrito([...carrito, guitarra])
        }else{
            const carritoActualizado = carrito.map(guitarraState=>{
                if(guitarraState.id === guitarra.id){
                    return{
                        ...guitarraState,
                        cantidad: guitarra.cantidad
                    }
                }
                return guitarraState
            })
            setCarrito(carritoActualizado)
        }
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState=>{
            if(guitarraState.id === guitarra.id){
                return{
                    ...guitarraState,
                    cantidad: guitarra.cantidad
                }
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }
    
    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter(guitarraState=>guitarraState.id !== id)
        setCarrito(carritoActualizado)
    }

    return(
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
            />
        </Document>
    )
}

function Document({children}) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export function CatchBoundary(){
    const error = useCatch()
    return (
        <Document>
            <p className='error'>{error.status} {error.statusText}</p>
            <Link className='error-enlace' to="/">Inicio</Link>
        </Document>
    )
}

export function ErrorBoundary(error){
    return(
        <Document>
        <p className='error'>{error.status} {error.statusText}</p>
        <Link className='error-enlace' to="/">Inicio</Link>
        </Document> 
    )
}