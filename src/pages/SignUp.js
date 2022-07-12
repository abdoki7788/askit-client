// react-router
import { Link } from 'react-router-dom';

// assets
import '../assets/style/sign.css';
import logo from '../assets/images/Logo-lg-white.png';

export default function SignUp() {

    const formHandler = (e) => {
        e.preventDefault();
    }

    return ( 
        <div className='sign_content'>
            <div className='sign_box'>
                <div className='greeting'>
                    <Link to='/' className='sign_logo_box'><img className='sign_logo' alt='logo' src={logo} /></Link>
                    <div className='sign_tit'>ساخت حساب کاربری</div>
                    <div className='sign_greeting'>به جمع ما خوش اومدی دوست عزیز</div>
                </div>

                <form onSubmit={formHandler} className='sign_form'>
                    <input className='sign_input' type='text' placeholder='نام' />
                    <input className='sign_input' type='text' placeholder='نام کاربری' />
                    <input className='sign_input' type='email' placeholder='آدرس ایمیل' />
                    <input className='sign_input' type='password' placeholder='رمز عبور' />
                    <input className='sign_input' type='password' placeholder='تکرار رمز عبور' />

                    <div className='other_way'>
                        <div className='other_way_tit'>قبلا ثبت نام کرده اید؟</div>
                        <Link to='/signin' className='other_way_btn'>وارد شوید</Link>
                    </div>

                    <button className='sign_up_btn sign_btn' type='submit'>ثبت نام</button>
                </form>
            </div>
        </div>
     );
}