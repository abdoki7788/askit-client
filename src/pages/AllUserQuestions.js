// components
import Header from '../components/Header';

// assets
import '../assets/style/profile.css'

// redux
import { useSelector } from 'react-redux';

export default function AllUserQuestions() {

    const userQuestions = useSelector(userQuestions => userQuestions)

    return ( 
        <div className='all_user_questions'>
            <Header />
            <div className='all_u_q_list'>
                <div className='all_u_q_tit'><span className='texts_starter'></span>پرسش ها</div>
                {userQuestions.map((question, index) => 
                    <div key={index} className='user_qs'>
                        <div className='user_q_tit'>{question.title}</div>
                        <div className='user_q_desc'>{question.description}</div>
                        <div className='user_q_tags'>
                            {
                                question.tags.map((tag, index) => <div key={index} className='user_q_tag'>{tag}</div>)
                            }
                        </div>
                    </div>    
                )}
            </div>
        </div>
     );
}