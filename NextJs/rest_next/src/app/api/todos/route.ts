import { request } from "http";
import { Puritan } from "next/font/google";
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

// put request route handler 

export async function PUT(request:Request)
{
    const {userId,id,title,completed}:Todo = await request.json()
    if(!userId|| !id || !title|| typeof(completed)!== "boolean")
    return NextResponse.json({
        "message":"Missing required data"
    })

    const res = await fetch(DATA_SOURCE_URL,{
        method:"PUT", 
        headers:{
            'Content-Type':'application/json',
            'API-Key':API_KEY
        },
        body:JSON.stringify({
            userId,title,completed:false
        })
    })

    const updatedTodo:Todo = await res.json()
    return NextResponse.json(updatedTodo)
}
