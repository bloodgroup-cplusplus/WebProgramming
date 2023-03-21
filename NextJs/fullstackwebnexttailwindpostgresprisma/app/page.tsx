import Link from "next/link"

async function getPosts()
{
  const res = await fetch(`${process.env.BASE_URL}/api/hello/getPosts`)
  if(!res.ok)
  {
    console.log("Response")
  }
  return res.json()
}


export default async function Home() {
  const data = await getPosts()
  return (
    <main className= "py-7 px-48">
      <Link className="bg-teal-500 text-black font-medium py-2 px-4 rounded-md" 
      href="{/dashboard}"> Go to the dashboard</Link>
     
    </main>
  )
}
