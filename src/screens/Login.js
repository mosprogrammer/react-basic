import React, { useEffect, useState } from 'react'
import NoAuth from '../layout/NoAuth'
import { Form, Button, Alert } from 'react-bootstrap'

const login = {
    email: 'test@test.com',
    password: '123456'
}

const AlertLogin = (props) => {

    useEffect(() => {
        console.log('mounting');
        return () => {
            console.log('unmounting');
        }
    }, [])

    if (props.isLogin) {
        return (<Alert variant='success'>
            Login Success
        </Alert>)
    }

    // const a;

    // a === null
    // null => false
    // undefined

    // a !== null & a !== undefind
    // 0 => false
    // '' => false
    // false => false

    // a มีค่าข้างในตัวแปรที่ไม่ใช่ null,0,'',false


    if (!props.isLogin && props.error) {
        return (<Alert variant='danger'>
            {props.error}
        </Alert>)
    }

    return (<></>)
}
// let anonyUseEffect

// Login()
// const unmount = anonyUseEffect()

// if(unmount === function) ? unmount() : null

function Login() {
    const [checkLogin, setCheckLogin] = useState({
        isSuccess: false,
        error: '',
    })

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        if (form.email === login.email && login.password === form.password) {
            setCheckLogin({ isSuccess: true, error: '' })
            // console.log('Success')
        } else {
            setCheckLogin({ isSuccess: false, error: 'Login Fail.' })
            // console.log('Fail')
        }
    }

    // console.log('set props & set state');

    useEffect(() => {
        // console.log('useEffect');
        return () => {

        }
    }, [])

    // console.log('render');

    return (
        <NoAuth>
            <Form
                onSubmit={handleSubmit}
                style={{
                    textAlign: 'left',
                }}
            >
                <h1 className="h3 mb-3 fw-normal" style={{ textAlign: 'center' }}>Please sign in</h1>
                {/** เช็คเงื่อนไข การแสดงผล */}
                <AlertLogin isLogin={checkLogin.isSuccess} error={checkLogin.error} />


                <div className="form-floating">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='text' placeholder='name@example.com' onChange={e => { setForm({ ...form, email: e.target.value }) }} />
                </div>
                <div className="form-floating">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' onChange={e => { setForm({ ...form, password: e.target.value }) }} />
                </div>

                <div className="checkbox mb-3">
                    <Form.Group controlId="formBasicCheckbox" style={{
                        textAlign: 'center'
                    }}>
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    {/* <input type="checkbox" value="remember-me"> Remember me */}
                </div>
                <Button type='submit' variant='primary' block>Sign in</Button>
                <p className="mt-5 mb-3 text-muted" style={{ textAlign: 'center' }}>© 2017–2021</p>
            </Form>
        </NoAuth>
    )
}

export default Login
