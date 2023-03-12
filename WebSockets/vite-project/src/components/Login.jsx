import React from 'react'
import {Container,Form} from "react-bootstrap"
import { useRef } from 'react'

export default function Login() {
    const idRef=useRef()
  return (
    <Container classname="align-items-center d-flex" style={{height:'100vh'}}>
        <Form>
            <Form.Group>
                <Form.Label>Enter your Id</Form.Label>
                <Form.Control type="text" ref={idRef} required/>
            </Form.Group>

        </Form>
    </Container>
      
  )
}
