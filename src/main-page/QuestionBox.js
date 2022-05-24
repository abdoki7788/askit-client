// import assets
import '../assets/style/main.css'
import '../assets/style/question-box.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart , faBookmark } from '@fortawesome/free-solid-svg-icons';

// import components
import { useState } from 'react'

function QuestionBox(props) {

    let [ heartManner , setHeartManner ] = useState(false)

    let [ bookmarkManner , setBookmarkManner ] = useState(false)

    let solidHeart = '@fortawesome/free-solid-svg-icons'

    return ( 
        <div className="q_box">
            <div className="q_top_content">
                <div className="creator">
                    <div className="creator_inf">
                        <span className="who_create">ایجاد کننده</span>
                        <span className="creator_name">{ props.creator }</span>
                    </div>
                    <div className="creator_profile"></div>
                </div>
                <a className="title" href='./'>{ props.tit }</a>
            </div>

            <div className="q_bottom_content">
                <div className="description">{ props.desc }</div>

                <div className="q_icons">
                    <div  className={bookmarkManner ? "q_icon_bookmark_selected" : "q_icon_bookmark"} onClick={() => setBookmarkManner(! bookmarkManner)}><FontAwesomeIcon icon={faBookmark} /></div>
                    <div className={heartManner ? "q_icon_heart_selected" : "q_icon_heart"} onClick={() => setHeartManner(! heartManner)}><FontAwesomeIcon icon={faHeart} /></div>
                </div>

                <div className="tags">
                    { props.tags.map(tag => <div className="tag">{ tag } #</div>)}
                </div>
            </div>
        </div>
     );
}

export default QuestionBox;