// react-router
import { Link } from 'react-router-dom';

// assets
import '../assets/style/sign.css';
import logo from '../assets/images/Logo-lg-white.png';

export default function SignIn() {

    const formHandler = (e) => {
        e.preventDefault();
    }

    return ( 
        <div className='sign_content'>
            <div className='sign_box sign_in_box'>
                <div className='greeting'>
                    <Link to='/' className='sign_logo_box'><img className='sign_logo' alt='logo' src={logo} /></Link>
                    <div className='sign_tit'>ورود به حساب کاربری</div>
                    <div className='sign_greeting'>خوشحالیم دوباره مبینیمت دوست عزیز</div>
                </div>

                <form onSubmit={formHandler} className='sign_form'>
                    <input className='sign_input' type='text' placeholder='شماره موبایل یا آدرس ایمیل' />
                    <input className='sign_input' type='password' placeholder='رمز عبور' />

                    <div className='other_way'>
                        <div className='other_way_tit'>کاربر جدید هستید؟</div>
                        <Link to='/signup' className='other_way_btn'>ثبت نام کنید</Link>
                    </div>

                    <button className='sign_in_btn sign_btn' type='submit'>ورود</button>
                </form>
            </div>
        </div>
     );
}