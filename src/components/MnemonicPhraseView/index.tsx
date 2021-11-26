import React from 'react'

const MnemonicPhraseView:React.FC<{phrase: string}> = ({ phrase }) => {
    if (phrase === '') return null
    const mnemonicPhrase = phrase.split(" ",12)
    return(
        <div className='flex flex-wrap justify-center mt-2'>
            {mnemonicPhrase.map(w => {
                return( 
                    <div className='text-white text-m bg-yellow-400 border-2 mb-2 ml-1 p-1 border-gray-400 text-lg rounded' key={w}>
                        {w}
                    </div>
                )
            })}
        </div>
    )
}

export default MnemonicPhraseView