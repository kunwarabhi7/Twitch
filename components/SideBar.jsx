import {TbLayoutSidebarLeftCollapse} from 'react-icons/tb'
import {BsDot} from 'react-icons/bs'
import { MOCK_DATA } from '../MOCK_DATA'

const SideBar = () => {
  return (
    <div className='text-white pt-16 bg-black basis-1/6'>
      
      <div className='hidden md:flex justify-between'>
            <h1>RECOMMENDED CHANNELS</h1>
<TbLayoutSidebarLeftCollapse />
            </div>
 {MOCK_DATA.map((data)=>{
    return (
        <div className='flex justify-evenly'>
          <div>
            <img src={data.avatar} alt="data.name" />
          </div>
          <div className='hidden md:flex flex-col'>
            <p>{data.username}</p>
            <h4>{data.game_name}</h4>
          </div>
          <div className='hidden md:flex'>
<BsDot size={25} className='text-red-500' />
            <p>{data.rank}</p>
          </div>
        </div>
    )
 })}
    </div>
  )
}

export default SideBar
