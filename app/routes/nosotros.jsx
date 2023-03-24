import imagen from '../../public/img/nosotros.jpg'
import styles from "../styles/nosotros.css"

export function meta() {
  return(
    {
        title: 'GuitarLA - Sobre Nosotros',
    }
)
}

export function links(){
  return[
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "preload",
      href: imagen,
      as:"image"
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci autem quod nisi, possimus magnam saepe tenetur. Itaque distinctio quia pariatur dolorem aliquam repellendus, numquam vitae amet quidem recusandae, soluta corrupti dolor consequuntur! Voluptas obcaecati aspernatur accusamus, facere quasi et dolor provident adipisci quas reiciendis id ipsum earum deleniti qui optio. Assumenda, inventore quae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloribus obcaecati vero voluptate, possimus, inventore vel earum exercitationem dolorum magni atque officiis id eos. Necessitatibus eius mollitia cumque neque nulla, fugit cum. Maiores iusto itaque perspiciatis enim repellat quibusdam esse debitis vero similique ex repudiandae numquam, harum quas, eveniet consequuntur necessitatibus aliquid! Quas, nulla.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros