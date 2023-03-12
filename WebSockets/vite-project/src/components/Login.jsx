import React from 'react'
import {Container,Form,Button} from "react-bootstrap"
import { useRef } from 'react'
import {v4 as uuidv4} from 'uuid'

export default function Login({onIdSubmit}) {
    const idRef=useRef()
    function handleSubmit(e)
    {
        e.preventDefault()
        onIdSubmit(idRef.current.value)
    }


    function createNewId()
    {
        onIdSubmit(uuidv4())
    }
  return (
    <Container classname="align-items-center d-flex" style={{height:'100vh'}}>
        <Form onSubmit={handleSubmit} className='w-100'>
            <Form.Group>
                <Form.Label>Enter your Id</Form.Label>
                <Form.Control type="text" ref={idRef} required/>
            </Form.Group>
        <Button type="submit" classname="mr-15"> Login</Button>
        <Button onClick={createNewId}variant="secondary">Create A new Id</Button>
        </Form>
    </Container>
      
  )
}
