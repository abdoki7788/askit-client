// assets
import '../assets/style/information-box.css';

// react-router
import { Link } from 'react-router-dom';

function InformationBox() {

    const bestUsers = [
        {id:1, name:'Masocher'},
        {id:2, name:'Ebo'},
        {id:3, name:'Masocher'},
        {id:4, name:'Ebo'},
        {id:5, name:'Ebo'},
        {id:6, name:'Masocher'},
        {id:7, name:'Ebo'},
        {id:8, name:'Masocher'}
    ]

    const hotTopics = [
        {id:1, creator:'Masocher', title:'چگونه یک توسعه دهنده فرانت اند بشویم ؟'},
        {id:2, creator:'Masocher', title:'چگونه یک توسعه دهنده فرانت اند بشویم ؟'},
        {id:3, creator:'Masocher', title:'چگونه یک توسعه دهنده فرانت اند بشویم ؟'},
        {id:4, creator:'Masocher', title:'چگونه یک توسعه دهنده فرانت اند بشویم ؟'},
        {id:5, creator:'Masocher', title:'چگونه یک توسعه دهنده فرانت اند بشویم ؟'},
        {id:6, creator:'Masocher', title:'چگونه یک توسعه دهنده فرانت اند بشویم ؟'},
        {id:7, creator:'Masocher', title:'چگونه یک توسعه دهنده فرانت اند بشویم ؟'},
        {id:8, creator:'Masocher', title:'چگونه یک توسعه دهنده فرانت اند بشویم ؟'},
        {id:9, creator:'Masocher', title:'چگونه یک توسعه دهنده فرانت اند بشویم ؟'},
        {id:10, creator:'Masocher', title:'چگونه یک توسعه دهنده فرانت اند بشویم ؟'},
    ]

    const allTags = [
        {id:1, name:'آشپزی'},
        {id:2, name:'برنامه نویسی'},
        {id:3, name:'ریاضی'},
        {id:4, name:'فیزیک'},
        {id:5, name:'شیمی'},
        {id:6, name:'ادبیات'},
        {id:7, name:'تحصیل'},
        {id:8, name:'کامپیوتر'},
        {id:9, name:'سخت افزار'},
        {id:10, name:'نرم افزار'},
        {id:11, name:'طراحی-وب'},
        {id:12, name:'جاوااسکریپت'},
        {id:13, name:'پایتون'},
        {id:14, name:'لاراول'},
        {id:15, name:'فلاتر'},
    ]

    return ( 
        <div className='information_box'>
            <div className='hot_topics'>
                <div className='inf_box_tit'>پرسش های داغ هفته <div className='title_hr'></div></div>

                <div className='hot_topics_content'>
                    {
                        hotTopics.map(topic => 
                            <div key={topic.id} className='hot_topic'>
                                <div className='topic_creator'>
                                    <div className='topic_creator_profile'></div>
                                    <div className='topic_creator_name'>{ topic.creator }</div>
                                </div>
                                <Link to='/question' className='topic_title'>{ topic.title }</Link>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className='topics_tags'>
                <div className='inf_box_tit'>تگ ها <div className='title_hr'></div></div>

                <div className='topics_tags_content'>
                    {
                        allTags.map(tag => <div key={tag.id} className='topic_tag'># {tag.name}</div>)
                    }
                </div>
            </div>

            <div className='best_users'>
                <div className='inf_box_tit'>کاربران فعال <div className='title_hr'></div></div>

                <div className='best_users_content'>
                    {
                        bestUsers.map(user => 
                            <div key={user.id} className='best_user'>
                                <div className='best_user_profile'></div>
                                <div className='best_user_name'>{ user.name }</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
     );
}

export default InformationBox;