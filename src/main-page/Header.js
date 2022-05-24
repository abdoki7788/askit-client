// import assets
import '../assets/style/main.css'
import '../assets/style/header.css'
import logo from '../assets/images/Logo-lg-blue.png'

function Header() {
    return ( 
        <header>

            <div className="header_buttons">
                <button className="sign_in">ورود</button>
                <button className="sign_up">ثبت نام</button>
            </div>

            <img className="logo" alt="logo" src={logo} />

        </header>
     );
}

export default Header;