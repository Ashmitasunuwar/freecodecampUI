import React, { useState } from 'react'
import logoImg from '../images/fcc_primary_large.svg'
import '../css/signin.css'
import headerLogo from '../images/logo-512X512.png'

import google from '../images/google.svg'
import git from '../images/Octicons-mark-github.svg'
import apple from '../images/apple2.svg'
import LoginOption from './LoginOption'
import { Link } from 'react-router-dom'
import LoginIn from './LoginIn'
function SignIn() {
    const [userstatus, setStatus] = useState(true);

    return (
        <div style={{ backgroundColor: '#d0d0d5', fontFamily: 'Lato, Arial !important' }}>
            <header >
                <nav className="navbar-singnIn">
                    <div className="col-md-2">
                        <img className="logo" src={logoImg} height={24} width={210} alt='image not found' /></div>
                </nav>
            </header>

            <div>
                <main >
                    <div className='container loginform'>
                        <div className='loginDialog'>
                            <div className='loginHeader'>
                                <img className='logoImgHeader' src={headerLogo} height={30} />
                                <h1 className='headerInfo'>Log in to freeCodeCamp Learn</h1>
                            </div>
                            <LoginOption imgSrc={google} title='Continue with Google' />
                            <LoginOption imgSrc={git} title='Continue with Github' />
                            <LoginOption imgSrc={apple} title='Continue with Apple' />
                            <div className='login-Option divline'>
                                <div className='before' style={{ height: '1px', width: '120px', backgroundColor: '#0a0a23' }}></div> <span>OR</span>
                                <div className='after' style={{ height: '1px', width: '120px', backgroundColor: '#0a0a23' }}></div>
                            </div>
                            <div >
                                <LoginIn />
                            </div>
                            <div className='login-Option para'>
                                <p >Don't have an account yet?
                                    {userstatus ? <Link to='/login'>LogIn</Link> : <Link to='/signin'>SignIn</Link>}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='container'>
                        <footer className='footer'>
                            <div>
                                <p className='paragraph'>freeCodeCamp is free and your account is private by default. We use your email address to connect you
                                    to your account.</p>
                                <p className='paragraph'>You must be at least 13 years old to create an account on freeCodeCamp.
                                </p>
                                <p className='paragraph'>By continuing, you indicate that you have read and agree to freeCodeCamp.org's
                                    <a style={{ color: '#0d6efd' }}>Terms of Service </a>and <a style={{ color: '#0d6efd' }}>Privacy Policy.</a></p>
                            </div>
                        </footer>
                    </div>
                </main>

            </div >
        </div >
    )
}

export default SignIn