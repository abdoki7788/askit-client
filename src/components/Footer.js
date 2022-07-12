// assets
import '../assets/style/footer.css';
import logo from '../assets/images/Logo-lg-blue.png';

function Header() {
    return ( 
        <footer>
            <div className='top_content'>
                <img className='footer_logo' src={logo} />
            </div>
        </footer>
     );
}

export default Header;