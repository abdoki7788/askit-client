// assets
import '../assets/style/header.css';
import logo from '../assets/images/Logo-lg-blue.png';

// react-router
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <header>

            <div className='header_buttons'>
                <Link to='/signin' className='sign_in'>ورود</Link>
                <Link to='/signup' className='sign_up'>ثبت نام</Link>
            </div>

            <Link to='/' className='header_logo'><img className='header_logo' alt='logo' src={logo} /></Link>

        </header>
     );
}

export default Header;