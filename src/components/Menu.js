// assets
import '../assets/style/menu.css';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faSliders , faXmark, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// hooks
import { useState, useEffect } from 'react';

function FilterBox() {

    const [ scrolled, setScrolled ] = useState();

    useEffect(() => {
        const handleScroll = () => { 
          if (window.pageYOffset > 1) {
            setScrolled(true)
          } else {
            setScrolled(false)
          }
        }
        window.onscroll = handleScroll
        return () => {
          window.removeEventListener = handleScroll
        }
    }, []);

    const scroller = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    };

    let formHandler = (e) => {
        e.preventDefault()
    };

    let [ timeFilterManner , setTimeFilterManner ] = useState(false);
    let [ showFilterManner , setShowFilterManner ] = useState(false);
    let [ filterHover , setFilterHover ] = useState(false);

    const timeFilterMannerHandler = () => {
        setTimeFilterManner(! timeFilterManner)
    };

    const showFilterMannerHandler = () => {
        setShowFilterManner(! showFilterManner)
    };

    return ( 
        <div className='filter_box'>
            <FontAwesomeIcon onClick={scroller} className={`scroll_btn ${scrolled ? 'show' : ''}`} icon={faArrowUp}></FontAwesomeIcon>

            <div className='filter_box_content'>                
                <div className='filter_layer'>
                    <div className='filter_b filter_box_1' onMouseEnter={() => setFilterHover(true)} onMouseLeave={() => setFilterHover(false)} onClick={timeFilterMannerHandler}><span className={`${filterHover ? 'show' : ''}`}>فیلتر زمانی</span><FontAwesomeIcon className={`filter_tit_icon ${filterHover ? 'show' : ''}`} icon={faSliders} /></div>

                    <div className='filter_b filter_box_2' onMouseEnter={() => setFilterHover(true)} onMouseLeave={() => setFilterHover(false)} onClick={showFilterMannerHandler}><span className={`${filterHover ? 'show' : ''}`}>فیلتر نمایش</span><FontAwesomeIcon className={`filter_tit_icon ${filterHover ? 'show' : ''}`} icon={faSliders} /></div>
                </div>

                <div className='search_layer'>
                    <div className='search_box'>
                        <form className='search_form' onSubmit={formHandler}>
                            <input className='search_input' type='text' placeholder='جستجو ...' />
                            <button className='search_icon' type='submit'><FontAwesomeIcon icon={faSearch} /></button>
                        </form>
                    </div>
                </div>
            </div>

            <div className={timeFilterManner ? 'filter_after_show' : 'filter_after'}>
                <div className='black_layer'></div>
                <div className='time_filter_content'>
                    <FontAwesomeIcon className='close_icon' icon={faXmark} onClick={timeFilterMannerHandler} />
                    <div className='time_filter_content_tit'>فیلتر زمانی</div>
                    <div className='time_filters'>
                        <div className='time_filter' onClick={timeFilterMannerHandler}>سال پیش</div>
                        <div className='time_filter' onClick={timeFilterMannerHandler}>ماه پیش</div>
                        <div className='time_filter' onClick={timeFilterMannerHandler}>هفته پیش</div>
                        <div className='time_filter' onClick={timeFilterMannerHandler}>بروزترین</div>
                        <div className='time_filter' onClick={timeFilterMannerHandler}>جدیدترین</div>
                        <div className='time_filter' onClick={timeFilterMannerHandler}>قدیمی ترین</div>
                    </div>
                </div>
            </div>

            <div className={showFilterManner ? 'filter_after_show' : 'filter_after'}>
                <div className='black_layer'></div>
                <div className='time_filter_content'>
                    <FontAwesomeIcon className='close_icon' icon={faXmark} onClick={showFilterMannerHandler} />
                    <div className='time_filter_content_tit'>فیلتر نمایش</div>
                    <div className='time_filters'>
                        <div className='time_filter' onClick={showFilterMannerHandler}>همه</div>
                        <div className='time_filter' onClick={showFilterMannerHandler}>محبوب ترین</div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default FilterBox;