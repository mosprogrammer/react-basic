import React from 'react'
import NoAuth from '../layout/NoAuth'
import { Form, Button } from 'react-bootstrap'

function Login() {
    return (
        <NoAuth>

            <Form style={{
                textAlign: 'left',
            }}>

                <h1 className="h3 mb-3 fw-normal" style={{ textAlign: 'center' }}>Please sign in</h1>

                <div className="form-floating">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='text' placeholder='name@example.com' />
                </div>
                <div className="form-floating">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                </div>

                <div className="checkbox mb-3">
                    <Form.Group controlId="formBasicCheckbox" style={{
                        textAlign: 'center'
                    }}>
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    {/* <input type="checkbox" value="remember-me"> Remember me */}
                </div>
                <Button variant='primary' block>Sign in</Button>
                <p className="mt-5 mb-3 text-muted" style={{ textAlign: 'center' }}>© 2017–2021</p>
            </Form>
        </NoAuth>
    )
}

export default Login
