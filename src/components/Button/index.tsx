import React from 'react'

const Button:React.FC<{text:string, handleClick?: () => void}> = ({ text,handleClick }) => {

    return(
        <button
            className='w-[200px] h-[50px] text-[18px] bg-[#333] rounded-sm border-2 border-black my-2 text-white hover:bg-gray-500'
            onClick={handleClick}    
        >
            {text}
        </button>
    )
}

export default Button