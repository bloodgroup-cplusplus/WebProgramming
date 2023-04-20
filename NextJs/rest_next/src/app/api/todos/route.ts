import { NextResponse } from "next/server";


const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
// define api key 

const API_KEY:string = process.env.DATA_API_KEY as string

// get route

export async function GET(){

    const res = await fetch(DATA_SOURCE_URL)
    const todos: Todo[] =  await res.json()
    return NextResponse.json(todos)
}


// to delte the route 

export async function DELETE(request:Request)
{
    const {id} : Partial<Todo> = await request.json() // there is an error in next js 13.3.0 
    if(!id) return NextResponse.json({"message":"Todo id required"})

    await fetch(`${DATA_SOURCE_URL}/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'API-Key':API_KEY
        }
    })

    return NextResponse.json({"message":`Todo ${id} deleted`})

}

// post request 
export async function POST(request:Request)
{
    const {userId,title} :Partial<Todo> = await request.json()

    if(!userId || !title) return NextResponse.json({"message":"Missing required data"})

    const res = await fetch(DATA_SOURCE_URL,{
        method:"POST",
        headers:{
            'Content-Type':'application/json', 
            'API-KEY':API_KEY
        }, 
        body:JSON.stringify({
            userId,title,complted:false
        })
    })
    const newTodo: Todo = await res.json()

    return NextResponse.json(newTodo)
}