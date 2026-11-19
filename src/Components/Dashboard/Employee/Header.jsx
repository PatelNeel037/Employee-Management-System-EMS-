
const Header = ({setUser, userData}) => {
    
  return (
    <div>
        <div className='flex justify-between items-center p-5 text-white '>
            <div>
                <h1><span className='text-2xl'>Hello</span> <br /> <span className='text-3xl font-bold'>{userData.name}👋</span></h1>
            </div>
            <div>
                <button
                onClick={() => {
                    localStorage.setItem('role', 'null')
                    setUser(JSON.parse(localStorage.getItem('role')))
                }}
                 className='bg-red-600 px-5 py-2 text-white rounded active:scale-90 cursor-pointer '>Log Out</button>
            </div>
        </div>
    </div>
  )
}

export default Header