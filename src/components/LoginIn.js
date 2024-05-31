import React from 'react'
import { useState, useContext } from 'react'
import '../css/signin.css'
import SignInContext from './signInContext'
import { Link } from 'react-router-dom'

function LoginIn({ status }) {
    const contextData = useContext(SignInContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [emailError, setEmailerror] = useState(false);


    const contextStorage = () => {
        let detail = { userName, email, password }
        console.log('detail', detail);
        contextData.info.setUserDetails(detail);
        contextData.info.setUserDetails([...contextData.info.userDetails, detail]);
        setEmail('');
        setPassword('');
        setUserName('');

    }

    const handleBtnSubmit = (e) => {
        console.log('clicked');
        contextStorage();
    }
    const onClickInput = () => {

    }

    const handleEmailChange = (event) => {
        console.log(event, 'e')

        if (event.target.value.toString().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {

            setEmailerror(false)


        } else {
            setEmailerror(true)
        }
        setEmail(event.target.value)
    }

    //task signing option with username email and password
    const userNameChangeHandle = (e) => {
        e.preventDefault();
        setUserName(e.target.value)
    }
    const passwordChangeHandle = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }
    return (<>

        <div className='login-Option' >
            <input className='emailInput' placeholder='Emailaddress*'
                type="email" value={email}
                onChange={(e) => { handleEmailChange(e) }} />
            {emailError ?
                <span style={{ display: 'flex' }}>
                    <span className='errorcls1'></span>
                    <p className='errorcls '> Email is not valid.</p></span> : null}
        </div>
        <div className='login-Option' style={{ marginTop: '24px', borderColor: '#ffc107' }}>
            <button className=' btn btn-warning emailSubmitBtn'
                onClick={(e) => { handleBtnSubmit(e) }}>Continue    </button>
        </div >
    </>


    )
}

export default LoginIn