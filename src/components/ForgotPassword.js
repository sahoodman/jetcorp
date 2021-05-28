import React, { useRef, useState  } from 'react'
import { Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import {    Link   } from 'react-router-dom' 


export default function ForgotPassword() {
    
    const emailRef = useRef()
    //const passwordRef = useRef()

    const { resetPassword   } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    //const history  = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        // if (passwordRef.current.value !== passwordConfirmRef.current.value){
        //     return setError('Passwords do not match')
        // }

        try{
            setMessage("")
            setError("")
            setLoading(true)
            //await login(emailRef.current.value, passwordRef.current.value)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions to reset password")
            //history.push("/")
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }
    
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2> 
                    {/* {JSON.stringify(currentUser)} */}
                    {/* { currentUser.email} */}
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>

                        {/* <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group> */}

                        {/* <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required/>
                        </Form.Group> */}

                        <Button disabled={loading} className="w-100 mt-2" type="submit">Reset Password</Button>
                        
                        <div className="w-100 text-center mt-3"><Link to="/login">Log In</Link></div>
                    </Form> 
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}
