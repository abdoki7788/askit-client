// assets
import '../assets/style/header.css';
import logo from '../assets/images/Logo-lg-blue.png';

// react-router
import { Link } from 'react-router-dom';

// react-redux
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { LOG_OUT } from '../redux/types';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faStar, faMoon, faCircleQuestion, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Header() {

    const dispatch = useDispatch()

    const logOut = () => {
        return {type: LOG_OUT}
    }

    const [signStatus, setSignStatus] = useState(useSelector(initialState => initialState.isAuthenticated))
    const userInf = useSelector(initialState => initialState.user)
    console.log('sign-status : ',signStatus)

    const [dropHover, setDropHover] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    return ( 
        <header>
            <div onClick={() => setDropHover(false)} className={`big_back ${dropHover && signStatus ? 'show' : ''}`}></div>

            <Link to='/' className='header_logo'><img className='header_logo' alt='logo' src={logo} /></Link>

            <div className='header_buttons'>
                {/* <FontAwesomeIcon className='template_status_btn' icon={faSun} /> */}
                {
                    signStatus
                        ?   <div className='prof_inf' onClick={() => setDropHover(! dropHover)}>
                                <img className='user_profile_shortcut' src={userInf.image_url} />
                            </div>

                        :   <div className='header_sign_buttons'>
                                <Link to='/signin' className='sign_in'>ورود</Link>
                                <Link to='/signup' className='sign_up'>ثبت نام</Link>
                            </div>
                }
            </div>

            <div className={`drop_down ${dropHover && signStatus ? 'show' : ''}`}>
                <div className='drop_sec drop_sec_1'>
                    <div onClick={() => {
                            dispatch(logOut())
                            setSignStatus(false)
                        }}
                        className='logout_btn'>خروج
                    </div>
                    <img className='user_profile_shortcut_2'/>
                    <div className='user_name_shortcut' style={{color: '#000'}}>{userInf.username}</div>
                    <Link to={'/profile'} className='see_profile'>مشاهده پروفایل</Link>
                </div>

                <div className='drop_hr'></div>

                <div className='dark_mode_btn' >
                    <FontAwesomeIcon className={`dark_mode_icon ${darkMode ? 'show' : ''}`} icon={darkMode ? faMoon : faSun} />
                    <button onClick={() => setDarkMode(! darkMode)} className='changer'>تغییر</button>
                </div>

                <div className='drop_sec drop_sec_2'>
                    <div className='user_score'><FontAwesomeIcon className='sec_i' icon={faStar} /> امتیازات</div>
                    <div className='howmuch_score'>100</div>
                </div>

                <div className='drop_sec drop_sec_3'>
                    <div className='user_score'><FontAwesomeIcon className='sec_i' icon={faCircleQuestion} /> پرسش ها</div>
                    <div className='howmuch_score'>0</div>
                </div>

                <div className='drop_sec drop_sec_4'>
                    <div className='user_score'><FontAwesomeIcon className='sec_i' icon={faCircleCheck} /> پاسخ ها</div>
                    <div className='howmuch_score'>0</div>
                </div>
            </div>

        </header>
     );
}

export default Header;