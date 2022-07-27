// components
import InformationBox from './InformationBox';
import { Route, Routes } from 'react-router-dom';

// axios
import axios from 'axios';

// assets
import '../assets/style/question-box.css';

// redux
import { Link } from 'react-router-dom';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';

export default function Questions() {

    let topics = axios.get('http://127.0.0.1:8070/topics')
        .then(response => response.data.items)
        .catch(err => console.log('error',err))

    return (
        <div className='main_content'>
            <div className='questions'>
                {
                    topics.length >= 1
                        ? topics.length > 1 
                                ? topics.map((ques, index) =>
                                    <div key={index} className='q_box'>
                                        <div className='q_top_content'>
                                            <div className='creator'>
                                                <div className='creator_inf'>
                                                    <span className='who_create'>ایجاد کننده</span>
                                                    <span className='creator_name'>{ques.creator}</span>
                                                </div>
                                                <div className='creator_profile'></div>
                                            </div>
                                            <Link to='/question' className='title'>{ques.title}</Link>
                                        </div>
        
                                        <div className='q_bottom_content'>
                                            <div className='description'>{ques.description}</div>
        
                                            <div className='q_icons'>
                                                <div className='q_icon_bookmark'><FontAwesomeIcon icon={faBookmark} /></div>
                                                <div className='q_icon_heart'><FontAwesomeIcon icon={faHeart} /></div>
                                            </div>
        
                                            <div className='tags'>
                                                {ques.tags.map((tag, index) => <div key={index} className='tag'>{tag} #</div>)}
                                            </div>
                                        </div>
                                    </div>
                                )
                                : <div className='q_box'>
                                        <div className='q_top_content'>
                                            <div className='creator'>
                                                <div className='creator_inf'>
                                                    <span className='who_create'>ایجاد کننده</span>
                                                    <span className='creator_name'>{topics[0].creator}</span>
                                                </div>
                                                <div className='creator_profile'></div>
                                            </div>
                                            <Link to='/question' className='title'>{topics[0].title}</Link>
                                        </div>
        
                                        <div className='q_bottom_content'>
                                            <div className='description'>{topics[0].description}</div>
        
                                            <div className='q_icons'>
                                                <div className='q_icon_bookmark'><FontAwesomeIcon icon={faBookmark} /></div>
                                                <div className='q_icon_heart'><FontAwesomeIcon icon={faHeart} /></div>
                                            </div>
        
                                            <div className='tags'>
                                                {topics[0].tags.map((tag, index) => <div key={index} className='tag'>{tag} #</div>)}
                                            </div>
                                        </div>
                                    </div>

                        : <div className='noTopics'>نتیجه ای یافت نشد</div>
                    }
            </div>

            <InformationBox />
        </div>
    );
}