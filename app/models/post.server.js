export async function getPosts(){
    const respuesta = await fetch(process.env.API_URL+"/posts?populate=imagen")
    const resultado = await respuesta.json()
    return resultado
}

