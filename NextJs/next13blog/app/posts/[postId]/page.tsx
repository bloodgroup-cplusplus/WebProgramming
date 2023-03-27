import getFormattedDate from "@/lib/getFormattedDate"
import { getPostData, getSortedPostsData } from "@/lib/posts"
import {notFound} from "next/navigation"
import Link from "next/link"


export async function generateMetadata({params}:{params:{postId:string}})
{
    const posts = getSortedPostsData()
    const {postId} = params 
    const post = posts.find(post=>post.id === postId)

    if(!post)
    {
        return {
            title:"Post not found"
        }
    }
    return {
        title:post.title
    }
}

export default async function Post({params}:{params:{postId:string}})
{
    const posts = getSortedPostsData() // deduped 
    // part of next js 13 is request data when it is needed 
    // it will dedup the request 
    // we will need the post id from params 
    const{postId} = params

    // if we have the post id we check the exisitng posts 
    if(!posts.find(post=>post.id === postId))
    {
        // this is our custom 404 page
        return notFound()
    }

    const {title, date, contentHtml} = await getPostData(postId)

    const pubDate = getFormattedDate(date)

    return (
        <main className="px-6 prose prose-xl prose-slate dark: prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <p className="mt-0">{pubDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{ __html:contentHtml}}/>
                <p>
                    <Link href="/">Back to home</Link>
                </p>
            </article>
        </main>
    )
}