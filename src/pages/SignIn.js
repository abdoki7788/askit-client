// react-router
import { Link, Navigate } from 'react-router-dom';

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN } from '../redux/types';

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

// axios
import axios from 'axios';

// assets
import '../assets/style/sign.css';
import logo from '../assets/images/Logo-lg-white.png';

import { useState } from 'react';

export default function SignIn() {

    let [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const logIn = (token) => {return {type: LOG_IN, payload:token}}

    const signIn = (e) => {
        setLoading(true)
        e.preventDefault()
        let form = new FormData(e.target)
        axios.post('http://127.0.0.1:8070/auth/token', form)
            .then(response => {
                console.log('signInResponse', response)
                dispatch(logIn(response.data.access_token))
                setLoading(false)
            })
            .catch(err => toast.error('اطلاعات وارد شده صحیح نیست'))
    }

    return ( 
        <div className='sign_content'>
            <div className={`big_back ${loading ? 'show' : ''}`}></div>
            <div className={`loading ${loading ? 'show' : ''}`}>
                <div className='spinners'>
                    <div className='spinner-block'>
                        <div className='spinner spinner-3'></div>
                    </div>
                </div>
            </div>
            <div className='sign_box sign_in_box'>
                <div className='greeting'>
                    <Link to='/' className='sign_logo_box'><img className='sign_logo' alt='logo' src={logo} /></Link>
                    <div className='sign_tit'>ورود به حساب کاربری</div>
                    <div className='sign_greeting'>خوشحالیم دوباره مبینیمت دوست عزیز</div>
                </div>

                <form onSubmit={signIn} className='sign_form'>
                    <input name='username' className='sign_input' type='text' placeholder='نام کاربری یا ایمیل' />
                    <input name='password' className='sign_input' type='password' placeholder='رمز عبور' />

                    <div className='other_way'>
                        <div className='other_way_tit'>کاربر جدید هستید؟</div>
                        <Link to='/signup' className='other_way_btn'>ثبت نام کنید</Link>
                    </div>

                    <button className='sign_in_btn sign_btn' type='submit'>ورود</button>
                </form>
            </div>
            <ToastContainer />
        </div>
     );
}