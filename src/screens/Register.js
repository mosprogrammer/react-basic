import React from 'react'
import NoAuth from '../layout/NoAuth'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as api from '../api/auth'
import { useHistory } from 'react-router'

function Register() {
    const history = useHistory()

    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        api.register(data.email, data.password, data.firstname, data.lastname).then(res => {
            reset()
            history.push('/')
        }).catch(err => {
            console.error(err)
        })
    }

    return (
        <NoAuth>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    textAlign: 'left',
                }}
            >
                <h1 className="h3 mb-3 fw-normal" style={{ textAlign: 'center' }}>Register</h1>
                <div className="form-floating">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        {...register('email', {
                            required: true,
                        })}
                        type='text'
                        placeholder='name@example.com'
                    />
                    {errors?.email?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ email</p>}
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

                <div className="form-floating">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control
                        {...register('firstname', {
                            required: true,
                        })}
                        type='text'
                        placeholder='Firstname'
                    />
                    {errors?.firstname?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ Firstname</p>}
                </div>
                <div className="form-floating mb-3">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control
                        {...register('lastname', {
                            required: true,
                        })}
                        type='text'
                        placeholder='Lastname'
                    />
                    {errors?.lastname?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ lastname</p>}
                </div>
                <Button type='submit' variant='primary' block>Register</Button>
                <p className="mt-5 mb-3 text-muted" style={{ textAlign: 'center' }}>© 2017–2021</p>
            </Form>
        </NoAuth>
    )
}

export default Register
