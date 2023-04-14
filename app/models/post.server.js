export async function getPosts(){
    const respuesta = await fetch(process.env.API_URL+"/posts?populate=imagen")
    const resultado = await respuesta.json()
    return resultado
}

export async function getPost(post){
    const respuesta = await fetch(process.env.API_URL+"/posts?filters[url]="+post+"&populate=imagen")
    const resultado = await respuesta.json()
    return resultado
}