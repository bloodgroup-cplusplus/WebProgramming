import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ApolloClient from "apollo-boost"
import {ApolloProvider} from "@apollo/react-hooks"

const client = new ApolloClient({
  uri:"http://localhost:4000" // pass your own url into this 
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}><App/></ApolloProvider>
  </React.StrictMode>,
)
