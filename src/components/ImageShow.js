import React from 'react'

function ImageShow({ imgsrc }) {
    console.log(imgsrc);
    return (
        < div >
            <img src={imgsrc} height={100} alt='image not found' className='imgcomp' />
        </div >
    )
}

export default ImageShow