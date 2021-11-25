import React from 'react'

// const styles = {
//     word: {
//         borderRadius: 5,
//         // marginVertical: theme.distance.small,
//         // marginHorizontal: theme.distance.tiny,
//         marginBottom: theme.distance.small,
//         marginLeft: theme.distance.tiny,
//         padding: theme.distance.tiny,
//         borderWidth: 2,
//         borderColor: 'rgb(41 172 222 / 50%)',
//         borderStyle: 'groove',
//         backgroundColor: theme.colors.darkBrown,
//         color: theme.colors.textWhite,
//         fontSize: theme.fontsize.normal,

//     }
// }


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