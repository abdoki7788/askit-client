// assets
import '../assets/style/profile.css';

// components
import Header from '../components/Header'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleQuestion, faCircleCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// react-router
import { Link } from 'react-router-dom';

// react-redux
import { useSelector } from 'react-redux';

export default function Profile() {

    const userQuestions = useSelector(userQuestions => userQuestions);
    console.log(userQuestions)

    const user_questions_2 = [userQuestions[0], userQuestions[1]]

    return ( 
        <div className='profile'>
            <div className='profile_content'>
                <Header />
                <div className='profile_info'>

                    <div className='first_sec'>
                        <div className='user_box'>
                            <div className='user_cover'></div>
                            <div className='user_avatar'><div className='user_name'>Masocher</div></div>
                        </div>

                        <div className='user_information'>
                            <div className='follow_status'>
                                <div className='followers'><span className='how_many_f'>0</span> <span className='how_many_f_tit'><span>دنبال</span> <span>کننده</span></span></div>

                                <div className='followings'><span className='how_many_f'>0</span> <span className='how_many_f_tit'><span>دنبال</span> <span>شده</span></span></div>
                            </div>
                            <div className='edit_btn'>ویرایش پروفایل</div>
                        </div>

                        <div className='blue_box'></div>
                    </div>

                    <div className='second_sec'>
                        <div className='inf_box inf_box_1'>
                            <div className='inf_box_content'>
                                <FontAwesomeIcon className='inf_box_icon' icon={faStar} />
                                <div className='inf_title'>امتیازات</div>
                            </div>
                            <div className='inf_how_much'>500</div>
                        </div>

                        <div className='inf_box inf_box_2'>
                            <div className='inf_box_content'>
                                <FontAwesomeIcon className='inf_box_icon' icon={faCircleQuestion} />
                                <div className='inf_title'>پرسش ها</div>
                            </div>
                            <div className='inf_how_much'>{userQuestions.length}</div>
                        </div>
                        
                        <div className='inf_box inf_box_3'>
                            <div className='inf_box_content'>
                                <FontAwesomeIcon className='inf_box_icon' icon={faCircleCheck} />
                                <div className='inf_title'>پاسخ ها</div>
                            </div>
                            <div className='inf_how_much'>0</div>
                        </div>
                    </div>

                    <div className='third_sec'>
                        <div className='about_tit'><span className='texts_starter'></span>درباره کاربر</div>
                        <div className='about_desc'>در صنعت چاپ، لورم ایپسوم که به آن طرحنما گفته می‌شود، طراح سایت از لورم ایپسوم برای پر کردن صفحه استفاده متن ‌های بی‌معنی را در قالب طراحی خود قرار داده.</div>
                    </div>

                    <div className='fourth_sec'>
                        <div className='between_content'>
                            <div className='questions_sec_title'><span className='texts_starter'></span>پرسش ها</div>
                            <Link to='/all-user-questions'><div className={`more_questions ${userQuestions.length > 2 ? 'show' : ''}`}><div className='user_questions_text'> بیشتر</div> <FontAwesomeIcon className='arrow_icon' icon={faArrowLeft} /></div></Link>
                        </div>

                        <div className={`user_questions ${userQuestions.length > 0 ? 'show' : ''}`}>
                            {
                                userQuestions.length === 0 
                                    ?   <div className='no_questions'>
                                            هیچ نتیجه ای یافت نشد
                                            <div className='make_question'>ایجاد پرسش</div>
                                        </div>
                                    : userQuestions.length > 1 ?   
                                        user_questions_2.map((question, index) => 
                                            <div key={index} className='user_q'>
                                                <div className='user_q_tit'>{question.title}</div>
                                                <div className='user_q_desc'>{question.description}</div>
                                                <div className='user_q_tags'>
                                                    {
                                                        question.tags.map((tag, index) => <div key={index} className='user_q_tag'>{tag}</div>)
                                                    }
                                                </div>
                                            </div>    
                                        )
                                        : userQuestions.length === 1 ?   
                                            <div className='user_q'>
                                                <div className='user_q_tit'>{userQuestions[0].title}</div>
                                                <div className='user_q_desc'>{userQuestions[0].description}</div>
                                                <div className='user_q_tags'>
                                                    {
                                                        userQuestions[0].tags.map((tag, index) => <div key={index} className='user_q_tag'>{tag}</div>)
                                                    }
                                                </div>
                                            </div>    
                                            : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}