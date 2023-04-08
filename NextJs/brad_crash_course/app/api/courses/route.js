import courses from "./data.json"
// we are going to send response 
import { NextResponse } from "next/server"


export async function GET(request)
{
    const {searchParams} = new URL(request.url);
    console.log(searchParams.get('name'))
    const query = searchParams.get('query')

    const filteredCourses = courses.filter((course)=>{
        return course.title.toLowerCase().includes(query.toLocaleLowerCase());
    });
    return NextResponse.json(filteredCourses)
}