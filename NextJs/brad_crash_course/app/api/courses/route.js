import courses from "./data.json"
// we are going to send response 
import { NextResponse } from "next/server"


export async function GET(request)
{
    return NextResponse.json(courses)
}