
const Header = ({setUser, userData}) => {
    
  return (
    <div className="p-5">
        <div className='bg-[#171B26] rounded-4xl  shadow-[inset_3px_3px_6px_rgba(255,255,255,0.12),inset_1px_1px_2px_rgba(255,255,255,0.20),inset_-6px_-6px_12px_rgba(0,0,0,0.5),0px_14px_28px_rgba(0,0,0,0.65),0px_6px_12px_-2px_rgba(0,0,0,0.45)] flex justify-between items-center p-5 text-white '>
            <div>
                <h1 className="text-3xl">Hello,{userData.name}👋</h1>
            </div>
            <div>
                <button
                onClick={() => {
                    localStorage.setItem('role', 'null')
                    setUser(JSON.parse(localStorage.getItem('role')))
                }}
                 className='bg-red-800 px-5 py-2 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.35),inset_-4px_-4px_5px_rgba(0,0,0,0.35),10px_10px_5px_rgba(0,0,0,0.35)] hover:bg-red-600 text-white rounded active:scale-90 cursor-pointer '>Log Out</button>
            </div>
        </div>
    </div>
  )
}

export default Header