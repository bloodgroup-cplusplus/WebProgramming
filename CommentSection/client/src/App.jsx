import React from "react"
import {useQuery} from "@apollo/react-hooks"
import {gql} from "apollo-boost"
import { AddComment } from "./AddComment"

const GET_POSTS = gql `

  query getPosts{
    posts{
      title 
      text 
      comments {
        author
        text
      }
    }
  }
`
function App() {
  // we can start using our hooks in our app component
  console.log("its ok ")
  const {loading,error,data} = useQuery(GET_POSTS)
  if(loading ) return "Loading ..."
  if(error) return`Error ${error.message}` 
  if(data)
  {
   console.log(data)
 }
  

  return (
    <>
    
    {data.posts.map(post=>{
      <>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      {post.comments.map((comment)=>{
        return <p><strong>{comment.author}</strong> {comment.text}</p>
      })}
      
      </>
    })}
    <AddComment/>
    </>
    
  )
}

export default App
