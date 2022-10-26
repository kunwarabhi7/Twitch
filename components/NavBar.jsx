import {BsThreeDotsVertical, BsTwitch} from 'react-icons/bs'
import {FiSearch, FiUser} from 'react-icons/fi'
const NavBar = () => {
  return (
    <div className='flex fixed justify-between w-full h-[50px] p-1 bg-black shadow-md'>
      <div className='flex h-[50px] w-[320px]'>
        <div className='justify-between h-[50px] w-[50px]'><BsTwitch className='bg-[#5C16C5]' size={30} /></div>
        <div className='h-[48px] w-[61px]'>
          <h1 className='font-bold hover:text-[#5c16c5] cursor-pointer'>Browse</h1></div>
        <div className='h-[50px] w-[50px] cursor-pointer'><BsThreeDotsVertical className='h-[20px] w-[20px]' /> </div>
      </div>
      <div className='flex w-[960px] h-[50px] '>
        <form className='flex ml-64 mt-1'>
          <input type="text" placeholder='Search' className='w-[355px] border border-gray-900 h-[36px]  bg-[#E5E5E5]'/>
          <FiSearch  size={20} className='bg-[#E5E5E5] h-[36px] '/>
        </form>
         </div>
          <div className='h-[50px] w-[181px] flex  justify-between'>

          <button className='cursor-pointer bg-gray-300    hover:bg-gray-400 h-[30px] w-[58px]'>Login</button>
          <button className='cursor-pointer h-[30px] w-[68px] hover:bg-[#772ce8] bg-[#5c16c5] text-gray-200'>SignUp</button>
          <button className='w-[30px] h-[30px]'><FiUser size={25} /></button>
          </div>
         
    </div>
  )
}

export default NavBar