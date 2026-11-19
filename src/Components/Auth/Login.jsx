import React from 'react'
import { useState } from 'react'

const Login = ({handelLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault();
        handelLogin(email, password)
        setPassword('')
        setEmail('')
    }

    return (
        <div className='flex justify-center items-center h-screen bg-black text-white'>
            <div className='flex justify-center items-center border-2 p-4 border-emerald-800 h-100 w-100 rounded'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className='flex flex-col gap-5 justify-center items-center'>
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        value={email}
                        required
                        className=' bg-neutral-1000 outline-none text-2xl text-neutral-300 border-emerald-800 border-2 rounded-3xl p-2'
                        type="email"
                        placeholder='Enter Email'
                    />

                    <input
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        value={password}
                        required
                        className=' bg-neutral-1000 outline-none text-2xl text-neutral-300 border-emerald-800 border-2 rounded-3xl p-2'
                        type="password"
                        placeholder='Enter Password'
                    />
                    <button
                        className='bg-emerald-800 text-2xl rounded-3xl p-2 w-full'
                        type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login