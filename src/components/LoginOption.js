import React from 'react'
import '../css/signin.css'

function LoginOption({ imgSrc, title }) {
    return (
        <div className='login-Option'>
            <img className='external-logo' src={imgSrc} height={20} width={20} />
            <span className='title'>{title}</span>
        </div>
    )
}

export default LoginOption