// react-router
import { Link } from 'react-router-dom';

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

// assets
import '../assets/style/sign.css';
import logo from '../assets/images/Logo-lg-white.png';
import { useState } from 'react';
import axios from 'axios';

export default function SignUp() {

    let [userName, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [repeatPassword, setRepeatPassword] = useState('')

    let [passwordAmount, setPasswordAmount] = useState(false)
    let [passwordRepeatAmount, setPasswordRepeatAmount] = useState(false)
    let [usernameAmount, setUsernameAmount] = useState(false)

    let [userPassword, setUserPassword] = useState('')

    const usernamePattern = /^[a-z0-9_-]{3,15}$/;
    const usernameInputHandler = (e) => {
        setUsername(e.target.value)
        const usernameStatus = usernamePattern.test(e.target.value)
        if (usernameStatus === true) {
            setUsernameAmount(true)
        } else {
            setUsernameAmount(false)
        }
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordInputHandler = (e) => {
        setPassword(e.target.value)
        setUserPassword(e.target.value)
        const passwordStatus = passwordPattern.test(e.target.value)
        if (passwordStatus === true) {
            setPasswordAmount(true)
        } else {
            setPasswordAmount(false)
        }
    }

    const passwordRepeatInputHandler = (e) => {
        setRepeatPassword(e.target.value)
        if (e.target.value.length > 0) {
            if (e.target.value === userPassword) {
                setPasswordRepeatAmount(true)
            } else {
                setPasswordRepeatAmount(false)
            }
        }
    }

    const signUp = (e) => {
        e.preventDefault()
        if (repeatPassword.length > 0 && repeatPassword !== password){
            toast.warning("رمز عبور نادرست است");
        } else {
            if(userName.length > 0 && password.length > 0 && repeatPassword.length > 0){
                axios.post('http://127.0.0.1:8070/auth/users/' , {username: userName, password: password})
                    .catch(err => toast.warning(err.response.data.detail))
            } else {
                toast.warning("همه فیلد ها باید پر شوند");
            }
        }
    }

    return ( 
        <div className='sign_content'>
            <div className='sign_box'>
                <div className='greeting'>
                    <Link to='/' className='sign_logo_box'><img className='sign_logo' alt='logo' src={logo} /></Link>
                    <div className='sign_tit'>ساخت حساب کاربری</div>
                    <div className='sign_greeting'>به جمع ما خوش اومدی دوست عزیز</div>
                </div>

                <form onSubmit={signUp} className='sign_form'>
                    <input onChange={usernameInputHandler} className={`sign_input ${usernameAmount ? 'success' : ''}`} type='text' placeholder='نام کاربری' />

                    <input onChange={passwordInputHandler} className={`sign_input ${passwordAmount ? 'success' : ''}`} type='password' placeholder='رمز عبور' />

                    <input onChange={passwordRepeatInputHandler} className={`sign_input ${passwordRepeatAmount && passwordAmount ? 'success' : ''}`} type='password' placeholder='تکرار رمز عبور' />

                    <div className='other_way'>
                        <div className='other_way_tit'>قبلا ثبت نام کرده اید؟</div>
                        <Link to='/signin' className='other_way_btn'>وارد شوید</Link>
                    </div>

                    <button className='sign_up_btn sign_btn' type='submit'>ثبت نام</button>
                </form>
            </div>

            <ToastContainer />
        </div>
     );
}