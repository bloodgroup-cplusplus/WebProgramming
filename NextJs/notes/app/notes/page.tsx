import PocketBase from "pocketbase"
import Link from "next/link"

async function getNotes()

{
    // pocketbase route
    const pb = new PocketBase("http://127.0.0.1:8090")
    // fetch the pagintated records list
    const res = await pb.collection("posts").getList(1)

    return res?.items as any[];
}




export default async function NotesPage()
{
    const notes = await getNotes();
    return (
        <div>
            <h1>Notes</h1>
            <div>
                {notes?.map((note)=>{
                    return <Note key = {note.id} note ={note}/>;
                })}
            </div>
        </div>
    );
}


function Note({note}:any)
{
    const {id, title,content,created} = note || {};

    return (
        <Link href = {`notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{content}</h5>
            </div>
        </Link>
    )
}