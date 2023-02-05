import Image from 'next/image'
import { Inter } from '@next/font/google'
// stuffs like useeffect usestate doesn't work in next js 
// cause next js is a server rendered component 
// we can enable client side features like use state and use effect using the keyword "use client"

// the only time you want to "use client" is when you want to do useeffect usestate etc . 

//"use client"


// components import 

import Movie from "./movie"

export default async function Home() {
  var res;
  try{
      const data = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
       res= await data.json()
      console.log(res)
  }catch(e)
  {
    console.log(e)
  }
  return (
    <main >
    <h1 className='text-lg py-2 '>Hello next 13 </h1>
    {res.results.map(movie=>(
      <Movie
      key={movie.id}
      id={movie.id}
      title={movie.title}
      poster_path={movie.poster_path}
      release_date={movie.release_date}/>
    ))}
    </main>
  )
}
