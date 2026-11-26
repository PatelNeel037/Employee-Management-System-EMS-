import React from 'react'
import { useState } from 'react'

const Login = ({ handelLogin, setUser }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault();
        handelLogin(email, password)
        setPassword('')
        setEmail('')
    }

    return (
        <div className='flex justify-center items-center h-screen bg-[#070a11] text-white'>
            <div className='shadow-[8px_8px_20px_rgba(0,0,0,0.5),-8px_-8px_20px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center bg-[#101522] p-4 h-fit w-100 rounded-2xl'>
                <h1 className='mb-10 text-[#FFFFFF] text-[32px]'>WELCOME</h1>
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className='flex flex-col gap-5 justify-center items-center w-full'>
                    <div className='w-full'>
                        <h1 className='px-3 text-[#94A3B8]'>Email</h1>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            value={email}
                            required
                            className=' bg-[#0D131F] shadow-[inset_2px_2px_20px_rgba(0,0,0,0.35),inset_-2px_-2px_20px_rgba(0,0,0,0.35)] outline-none w-full text-[#76777D] border-none rounded-2xl px-3 py-2'
                            type="email"
                            placeholder='kallu@op.com'
                        />
                    </div>

                    <div className='w-full'>
                        <h1 className='px-3 text-[#94A3B8]'>Password</h1>
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            value={password}
                            required
                            className=' bg-[#0D131F] shadow-[inset_2px_2px_20px_rgba(0,0,0,0.35),inset_-2px_-2px_20px_rgba(0,0,0,0.35)] outline-none w-full text-[#76777D] border-none rounded-2xl px-3 py-2'
                            type="password"
                            placeholder='********'
                        />
                    </div>
                    <button
                        className='bg-[#4F46E5] text-2xl rounded-2xl p-2 w-full active:scale-95 shadow-[0px_10px_20px_rgba(79,70,229,0.5)]  hover:shadow-[5px_5px_20px_rgba(255,255,255,0.35),-5px_-5px_20px_rgba(255,255,255,0.35)]'
                        type="submit">
                        Login
                    </button>
                    <h1>Or</h1>

                </form>
                <button
                onClick={() => {
                    localStorage.setItem('role', '3')
                    setUser(3)
                }}
                 className='mt-3 bg-[#0D131F] hover:bg-white hover:text-black hover:shadow-[5px_5px_20px_rgba(255,255,255,0.35),-5px_-5px_20px_rgba(255,255,255,0.35)] shadow-[inset_2px_2px_20px_rgba(0,0,0,0.35),inset_-2px_-2px_20px_rgba(0,0,0,0.35)] rounded-2xl active:scale-95 w-full p-2'>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Login