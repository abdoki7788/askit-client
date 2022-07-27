// components
import Alert from '../components/Alert';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Questions from '../components/Questions';
// import Footer from '../components/Footer';

// assets
import '../assets/style/main.css'

export default function Home() {
    return ( 
        <div className='home'>
            <Alert />
            <Header />

            <div className='home_content'>
                <Menu />
                <Questions />
            </div>
        </div>
     );
}