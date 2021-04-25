import React, { useContext, useEffect, useState } from 'react'
import NoAuth from '../layout/NoAuth'
import { Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as api from '../api/auth'
import { useHistory } from 'react-router'
import { Context, actions } from '../store'

const AlertLogin = (props) => {
    useEffect(() => {
        console.log('mounting');
        return () => {
            console.log('unmounting');
        }
    }, [])

    if (props.isLogin) {
        return (
            <Alert variant='success'>
                Login Success
            </Alert>
        )
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
    const { dispatch } = useContext(Context)

    const history = useHistory()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const [rememberMe, setRememberMe] = useState(false)

    const [checkLogin, setCheckLogin] = useState({
        isSuccess: false,
        error: '',
    })

    console.log(errors)

    const onSubmit = (data) => {

        api.login(data.email, data.password).then(res => {

            // console.log(res.data)

            dispatch(actions.login(res.data?.result?.user, res.data?.result?.token, res.data?.result?.expired))

            setCheckLogin({ isSuccess: true, error: '' })
            reset()
            history.push('/')
        }).catch(err => {
            setCheckLogin({ isSuccess: false, error: 'Login Fail.' })
        })
    }

    const handleRememberMe = () => {
        setRememberMe(!rememberMe)
    }

    // console.log('render');

    return (
        <NoAuth>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    textAlign: 'left',
                }}
            >
                <h1 className="h3 mb-3 fw-normal" style={{ textAlign: 'center' }}>Please sign in</h1>
                {/** เช็คเงื่อนไข การแสดงผล */}
                <AlertLogin isLogin={checkLogin.isSuccess} error={checkLogin.error} />


                <div className="form-floating">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        {...register('email', {
                            required: true,
                        })}
                        type='text'
                        placeholder='name@example.com'
                    />
                    {errors?.email?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ username</p>}
                </div>
                <div className="form-floating">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        {...register('password', {
                            required: true,
                        })}
                        type='password'
                        placeholder='Password'
                    />
                    {errors?.password?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ password</p>}
                </div>

                <div className="checkbox mb-3">
                    <Form.Group controlId="formBasicCheckbox" style={{
                        textAlign: 'center'
                    }}>
                        <Form.Check
                            type="checkbox"
                            label="Remember me"
                            checked={rememberMe}
                            onChange={handleRememberMe}
                        />
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
