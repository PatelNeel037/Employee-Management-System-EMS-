import React from 'react'

const AdminTaskCreater = () => {
  return (
    <div className='mt-5'>
        <div className='p-5'>
            <form className='bg-[#222223] flex justify-between p-5 rounded gap-5'>
                <div className='w-1/2 flex flex-col gap-3'>
                    <div>
                        <h2>Task Title</h2>
                        <input className=' w-full border border-white px-2 py-1 outline-none rounded ' type="text" placeholder='Make a UI desing' />
                    </div>
                    <div>
                        <h2>Date</h2>
                        <input className=' w-full border border-white px-2 py-1 outline-none rounded '  type="date" />
                    </div>
                    <div>
                        <h2>Asing To</h2>
                        <input className=' w-full border border-white px-2 py-1 outline-none rounded '  type="text" placeholder='employee Name' />
                    </div>
                    <div>
                        <h2>Category</h2>
                        <input className=' w-full border border-white px-2 py-1 outline-none rounded '  type="text" placeholder='Desing, dev, etc'/>
                    </div>
                </div>
                <div className=' w-1/2'>
                    <div className='w-full'>
                        <h2>Description</h2>
                        <textarea className='rounded w-full h-50 border border-white px-2 py-1 '></textarea>
                    </div>
                    <button type="submit" className='bg-green-400 mt-2 rounded w-full px-3 py-2'>Create Task</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AdminTaskCreater