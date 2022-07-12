// assets
import '../assets/style/question-box.css';

// redux
import { Link } from 'react-router-dom';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart , faBookmark } from '@fortawesome/free-solid-svg-icons';

// redux
import { useSelector } from 'react-redux';

export default function Questions() {

    const topics = useSelector(topics => topics)

    return ( 
        <div className='questions'>
            {
                topics.map((ques, index) => 
                    <div key={index} className='q_box'>
                        <div className='q_top_content'>
                            <div className='creator'>
                                <div className='creator_inf'>
                                    <span className='who_create'>ایجاد کننده</span>
                                    <span className='creator_name'>{ ques.creator }</span>
                                </div>
                                <div className='creator_profile'></div>
                            </div>
                            <Link to='/question' className='title' href='./'>{ ques.title }</Link>
                        </div>

                        <div className='q_bottom_content'>
                            <div className='description'>{ ques.content }</div>

                            <div className='q_icons'>
                                <div className='q_icon_bookmark'><FontAwesomeIcon icon={faBookmark} /></div>
                                <div className='q_icon_heart'><FontAwesomeIcon icon={faHeart} /></div>
                            </div>

                            {/* <div className='tags'>
                                { item.tags.map((tag,index) => <div key={index} className='tag'>{ tag } #</div>)}
                            </div> */}
                        </div>
                    </div>
                )
            }
        </div>
     );
}