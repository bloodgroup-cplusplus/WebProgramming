import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"


export async function GET(request:Request)
{
    // id is going to be in the url in the daynamic routes 
    const id = request.url.slice(request.url.lastIndexOf('/')+1)
    //  after last slash  the id exists 
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`)
    // just one todo
    const todo: Todo=await res.json()

    // if todo is not received 
    if(!todo.id) return NextResponse.json({"message":"Todo not found"})


    return NextResponse.json(todo)
}