import React, { useState } from 'react'

const SignUp = ({ setUser }) => {
    const data = JSON.parse(localStorage.getItem('employee'))

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault();
        let id = 1;
        data.forEach((elem) => {
            if (elem.email == email) {
                alert('Email is already taken')
            } else {
                id = id + 1;
            }
        })

        const newUser = {
            id: id,
            name: name,
            email: email,
            password: password,
            task: [],
            taskNumbers: {
                active: 0,
                newTask: 0,
                completed: 0,
                failed: 0
            }
        }

        data.push(newUser)

        localStorage.setItem('employee', JSON.stringify(data))

        localStorage.setItem('role', 'null')
        setUser(null)
        setName('')
        setPassword('')
        setEmail('')
    }

    return (
        <div className='flex justify-center items-center h-screen bg-[#0F131D] text-white'>
            <div className='shadow-[inset_3px_3px_6px_rgba(255,255,255,0.12),inset_1px_1px_2px_rgba(255,255,255,0.20),inset_-6px_-6px_12px_rgba(0,0,0,0.5),0px_14px_28px_rgba(0,0,0,0.65),0px_6px_12px_-2px_rgba(0,0,0,0.45)] flex flex-col justify-center items-center bg-[#101522] p-4 h-fit w-100 rounded-2xl'>
                <h1 className='mb-10 text-[#FFFFFF] text-[32px]'>WELCOME</h1>
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className='flex flex-col gap-5 justify-center items-center w-full'>
                    <div className='w-full'>
                        <h1 className='px-3 text-[#94A3B8]'>Name</h1>
                        <input
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            value={name}
                            required
                            className=' bg-[#0A0E18] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.04),0px_1px_rgba(0,0,0,0.05)] outline-none w-full text-[#76777D] border-none rounded-2xl px-3 py-2'
                            type="text"
                            placeholder='Kallu Op'
                        />
                    </div>
                    <div className='w-full'>
                        <h1 className='px-3 text-[#94A3B8]'>Email</h1>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            value={email}
                            required
                            className=' bg-[#0A0E18] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.04),0px_1px_rgba(0,0,0,0.05)] outline-none w-full text-[#76777D] border-none rounded-2xl px-3 py-2'
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
                            className=' bg-[#0A0E18] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.04),0px_1px_rgba(0,0,0,0.05)] outline-none w-full text-[#76777D] border-none rounded-2xl px-3 py-2'
                            type="password"
                            placeholder='********'
                        />
                    </div>
                    <button
                        className='bg-[#4F46E5] text-2xl rounded-2xl p-2 w-full active:scale-95 shadow-[inset_0px_2px_3px_1px_rgba(255,255,255,0.45),0px_6px_12px_-2px_rgba(0,0,0,0.4),0px_16px_32px_-4px_rgba(79,70,229,0.55),inset_0px_-3px_5px_1px_rgba(20,15,80,0.5)]  hover:shadow-[5px_5px_20px_rgba(255,255,255,0.35),-5px_-5px_20px_rgba(255,255,255,0.35)]'
                        type="submit">
                        Create Account
                    </button>
                    <h1>Or</h1>
                </form>
                 <button
                onClick={() => {
                    localStorage.setItem('role', 'null')
                    setUser(null)
                }}
                 className='mt-3 hover:bg-white hover:text-black hover:shadow-[5px_5px_20px_rgba(255,255,255,0.35),-5px_-5px_20px_rgba(255,255,255,0.35)] bg-[#0A0E18] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-3px_-3px_6px_rgba(255,255,255,0.04),0px_1px_rgba(0,0,0,0.05)] rounded-2xl active:scale-95 w-full p-2'>
                    LogIn
                </button>

            </div>
        </div>
    )
}

export default SignUp