import { Link } from "@remix-run/react"



export default function Post({post}) {
    console.log(post)
    const {contenido, imagen, titulo, url, publishedAt} = post
  return (
    <article>
        <img src={imagen.data.attributes.formats.small.url} className="imagen" alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{publishedAt}</p>
            <p className="resumen">{contenido}</p>
            <Link to={`/posts/${url}`}>Leer post</Link>
        </div>
    </article>
  )
}
