// assets
import '../assets/style/header.css';
import logo from '../assets/images/Logo-lg-blue.png';

// react-router
import { Link } from 'react-router-dom';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return ( 
        <header>

            <Link to='/' className='header_logo'><img className='header_logo' alt='logo' src={logo} /></Link>

            <div className='header_buttons'>
                <FontAwesomeIcon className='template_status_btn' icon={faSun} />
                <Link to='/signin' className='sign_in'>ورود</Link>
                <Link to='/signup' className='sign_up'>ثبت نام</Link>
            </div>

        </header>
     );
}

export default Header;