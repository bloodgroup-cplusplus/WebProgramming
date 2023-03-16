const {ApolloServer, gql} = require("apollo-server")
// apollo server is graphql server and in our data is stored in memory 


// each post will contain title and text 


const posts = [{
    title:"My first post",
    text: "Hello, i'm post text",
    comments:[]
}]



// typedefs will be a gql call with template strign 
// types is a way to tell graphql what kind of data you are going to 
// add into the server 


const typeDefs = gql  `

type Comment {
    author :String 
    text:String 
}

type Post{
    title: String 
    text:String 
    comments:[Comment]
}


type Query {
    posts:[Post]
}


type Mutation {
    addComment (author :String, text:String):Comment
}
`


// if types is the way to tell the server what kind of data you want in your database, resolver is 
// the way of telling the same server how to retrieve this data 


const resolvers = {
    Query:{
        posts: () => posts
    },

    Mutation :{
        addComment :(root,args) =>{
            // should return new comment 

            const newComment = {author: args.author, text: args.text}
            // we take this new comment and push it into the array of texts for our posts 
            posts[0].comments.push(newComment);
            return newComment;

        }
    }
}

// once we have our queries and resolvers defined we now create the server 


const server = new ApolloServer({typeDefs,resolvers})
server.listen().then(({url})=>{
    // define a function that will accept a url 
    console.log(`Server is running on ${url}` )
})