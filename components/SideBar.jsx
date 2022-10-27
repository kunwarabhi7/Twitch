import {TbLayoutSidebarLeftCollapse} from 'react-icons/tb'

import { MOCK_DATA } from '../MOCK_DATA'

const SideBar = () => {
  return (
    <div className='text-white pt-16 bg-black basis-1/6'>
 {MOCK_DATA.map((data)=>{
    return (
        <div>
            <div className='flex justify-between'>
            <h1>RECOMMENDED CHANNELS</h1>
<TbLayoutSidebarLeftCollapse />
            </div>
            <h1>data.id</h1>
            <img src={data.avatar} alt="data.name" />
            <p>{data.username}</p>
            <h4>{data.game_name}</h4>
            <p>{data.rank}</p>
        </div>
    )
 })}
    </div>
  )
}

export default SideBar
