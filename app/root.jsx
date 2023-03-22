import {
    Meta,
    Links
} from '@remix-run/react'
import styles from './styles/index.css'

export function meta(){
    return(
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: 'width=divice-width, initial-scale=1'
        }
    )
}

export function links(){
    return(
        {
            rel: 'stylesheet',
            href: styles
        }
    )
}

export default function App(){
    return(
        <Document>
            <h1>Desde Root</h1>
        </Document>
    )
}

function Document({children}){
    return(
        <html lang="es">
            <head>
                <Links></Links>
                <Meta></Meta>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}