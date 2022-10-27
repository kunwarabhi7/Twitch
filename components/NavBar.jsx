import { BsTwitch} from 'react-icons/bs'
import {FiSearch, FiUser} from 'react-icons/fi'
import HeadlessUI from './HeadlessUI'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}


const NavBar = () => {
  const { data: session } = useSession();
  
  return (
    <div className='flex fixed justify-between w-full h-[50px] p-1 bg-black shadow-md'>
      
      {/* Left  */}
      <div className='flex h-[50px] w-[320px]'>
        <Link href='/'>
        <div className='justify-between h-[50px] w-[50px]'><BsTwitch className='bg-[#5C16C5]' size={30} /></div>
        </Link>
        <div className='h-[48px] w-[61px]'>
          <h1 className='font-bold hover:text-[#5c16c5] cursor-pointer'>Browse</h1></div>
        <div className='h-[50px] w-[50px] cursor-pointer'><HeadlessUI className='h-[20px] w-[20px]' /></div>
      </div>
      {/* Center  */}
      <div className='hidden  lg:flex w-[960px] h-[50px] '>
        <form className='flex ml-64 mt-1'>
          <input type="text" placeholder='Search' className='w-[355px] border border-gray-900 h-[36px]  bg-[#E5E5E5]'/>
          <FiSearch  size={20} className='bg-[#E5E5E5] h-[36px] '/>
        </form>
         </div>
         {/* Right  */}
         
          <div className=' h-[50px] w-[300px] flex  justify-evenly'>
            {session ? (
               <div className='flex items-center'>
               <Link href='/account'>
                 <div className='flex'>
                   <p className='pr-4 cursor-pointer '>
                     Welcome, {session.user.name}
                   </p>                    
                 </div>
               </Link>
               <Menu as='div' className='relative text-left'>
                 <div className='flex'>
                   <Menu.Button>
                     <Image
                       src={session.user.image}
                       width='45'
                       height='45'
                       className='rounded-full'
                       alt='/'
                     />
                   </Menu.Button>
                 </div>
   
                 <Transition
                   as={Fragment}
                   enter='transition ease-out duration-100'
                   enterFrom='transform opacity-0 scale-95'
                   enterTo='transform opacity-100 scale-100'
                   leave='transition ease-in duration-75'
                   leaveFrom='transform opacity-100 scale-100'
                   leaveTo='transform opacity-0 scale-95'
                 >
                   <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                     <div className='py-1'>
                       <Menu.Item>
                         {({ active }) => (
                           <p
                             className={classNames(
                               active
                                 ? 'bg-gray-500 text-gray-100'
                                 : 'text-gray-200',
                               'block px-4 py-2 text-sm'
                             )}
                           >
                             <Link href='/account'>Account</Link>
                           </p>
                         )}
                       </Menu.Item>
   
                       <Menu.Item>
                         {({ active }) => (
                           <p
                             onClick={() => signOut()}
                             className={classNames(
                               active
                                 ? 'bg-gray-500 text-gray-100'
                                 : 'text-gray-200',
                               'block px-4 py-2 text-sm'
                             )}
                           >
                             Logout
                           </p>
                         )}
                       </Menu.Item>
                     </div>
                   </Menu.Items>
                 </Transition>
               </Menu>
             </div>
           )
             : (
            <>
              <Link href='/account'>

<button className='cursor-pointer bg-gray-300    hover:bg-gray-400 h-[30px] w-[58px]'>Login</button>
</Link>
<Link href='/account'>

<button className='cursor-pointer h-[30px] w-[68px] hover:bg-[#772ce8] bg-[#5c16c5] text-gray-200'>SignUp</button>
</Link>
<button className='w-[30px] h-[30px]'><FiUser size={25} /></button>
            </>)}

          </div>
   
          
    </div>
  )
}

export default NavBar