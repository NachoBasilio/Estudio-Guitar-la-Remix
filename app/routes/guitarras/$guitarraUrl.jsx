import React from 'react'

export async function loader({request, params}){
    const {guitarraUrl} = params
    console.log(guitarraUrl)
    return{}
}

export default function Guitarra() {
  return (
    <div>$guitarraUrl</div>
  )
}
