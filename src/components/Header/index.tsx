
import React from 'react'

const Header:React.FC = () => {
    return(
        <div className='flex border border-black w-[500px] h-[50px] top-0 bg-[#353333]'>
            <div className='flex flex-grow justify-center items-center'>
                <p className='text-[#ccc]'>Xfolio Chrome</p>
            </div>
        </div>
    )
}

export default Header