import React from 'react'
import { CogIcon, ChartBarIcon, SwitchHorizontalIcon, ViewGridIcon, ChatAltIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'

const Footer:React.FC = () => {
    return(
        <div className='flex border border-black w-[500px] h-[75px] bottom-0 bg-[#353333]'>
            <div className='flex flex-grow justify-around items-center'>
                <NavLink to='/wallet' className={({ isActive }) => (isActive ? 'bg-blue-300 rounded' : 'inactive')}> 
                    <ChartBarIcon className='h-[40px] text-gray-500 hover:text-white'/>
                </NavLink>
                <NavLink to='/swap' className={({ isActive }) => (isActive ? 'bg-blue-300 rounded' : 'inactive')}>
                    <SwitchHorizontalIcon className='h-[40px] text-gray-500 hover:text-white'/>
                </NavLink>
                <NavLink to='/extensions' className={({ isActive }) => (isActive ? 'bg-blue-300 rounded' : 'inactive')}>
                    <ViewGridIcon className='h-[40px] text-gray-500 hover:text-white'/>
                </NavLink>
                <NavLink to='/chat' className={({ isActive }) => (isActive ? 'bg-blue-300 rounded' : 'inactive')}>
                    <ChatAltIcon className='h-[40px] text-gray-500 hover:text-white'/>
                </NavLink>
                <NavLink to='/settings' className={({ isActive }) => (isActive ? 'bg-blue-300 rounded' : 'inactive')}>
                    <CogIcon className='h-[40px] text-gray-500 hover:text-white'/>
                </NavLink>
            </div>
        </div>
    )
}

export default Footer