import React from "react"
import { useMutation } from "@apollo/react-hooks"
import {gql} from "apollo-boost"

const ADD_COMMENT = gql `
    mutation addComment($author: String, $text: String){
        addComment(author: $author,text: $text){
            author 
            text
        }
    }
`


export const AddComment = () =>{
    const[addComment,{data}] = useMutation(ADD_COMMENT)
    const onSubmit = (e) =>{
        e.preventDefault();
        const{author,text} = e.target.elements;
        if(!author.value || !text.value)
        {
            return 
        }
        addComment({
            variables:{author:author.value,text:text.value}
        })
    }

    return <form onSubmit={onSubmit}>
        <div>
        <input type = "text" name = "author"/>
        </div>
        <div>
        <textarea type="text" name ="text"/>
        </div>
        <button>Add comment</button>
    </form>
}