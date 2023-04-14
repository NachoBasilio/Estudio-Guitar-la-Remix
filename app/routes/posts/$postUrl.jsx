import { getPost } from "~/models/post.server"



export async function loader({params}){

  const { postUrl } = params
  const post = await getPost(postUrl)

  if(post.data.length === 0){
    throw new Response("", {
      status:404,
      statusText: "Post No Encontrado"
    })
  }

  console.log(post)

  return post

}

export default function Post() {
  return (
    <div>$blogUrl</div>
  )
}
