// assets
import '../assets/style/menu.css';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownShortWide , faSearch , faSliders , faXmark, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// hooks
import { useState, useEffect } from 'react';

function FilterBox() {

    const [ scrolled, setScrolled ] = useState()

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
      }, [])

    const scroller = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    let [ searchManner , setSearchManner ] = useState(false)
    let [ filterBoxManner , setFilterBoxManner ] = useState(false)

    let formHandler = (e) => {
        e.preventDefault()
    }

    let [ timeFilterManner , setTimeFilterManner ] = useState(false)
    let [ showFilterManner , setShowFilterManner ] = useState(false)

    return ( 
        <div className='filter_box'>
            <ul className='menu'>
                <li className={searchManner ? 'selected' : ''} onClick={() => {
                    setSearchManner(! searchManner)
                    setFilterBoxManner(false)
                }}><FontAwesomeIcon icon={faSearch} /></li>

                <li className={filterBoxManner ? 'selected' : ''} onClick={() => {
                    setFilterBoxManner(! filterBoxManner)
                    setSearchManner(false)
                }}><FontAwesomeIcon className='filter_icon' icon={faArrowDownShortWide} /></li>

                <FontAwesomeIcon onClick={scroller} className={`scroll_btn ${scrolled ? 'show' : ''}`} icon={faArrowUp}></FontAwesomeIcon>
            </ul>

            <div className={searchManner ? 'search_layer_show' : 'search_layer'}>
                <div className='search_box'>
                    <form className='search_form' onSubmit={formHandler}>
                        <button className='search_icon' type='submit'><FontAwesomeIcon icon={faSearch} /></button><input className='search_input' type='text' placeholder='جستجو ...' />
                    </form>
                </div>
            </div>

            
            <div className={filterBoxManner ? 'filter_layer_show' : 'filter_layer'}>
                <div className='filter_b filter_box_1' onClick={() => setTimeFilterManner(! timeFilterManner)}><span>فیلتر زمانی</span><FontAwesomeIcon className='filter_tit_icon' icon={faSliders} /></div>

                <div className='filter_b filter_box_2' onClick={() => setShowFilterManner(! showFilterManner)}><span>فیلتر نمایش</span><FontAwesomeIcon className='filter_tit_icon' icon={faSliders} /></div>
            </div>

            <div className={timeFilterManner ? 'filter_after_show' : 'filter_after'}>
                <div className='black_layer'></div>
                <div className='time_filter_content'>
                    <FontAwesomeIcon className='close_icon' icon={faXmark} onClick={() => setTimeFilterManner(! timeFilterManner)} />
                    <div className='time_filter_content_tit'>فیلتر زمانی</div>
                    <div className='time_filters'>
                        <div className='time_filter' onClick={() => setTimeFilterManner(! timeFilterManner)}>سال پیش</div>
                        <div className='time_filter' onClick={() => setTimeFilterManner(! timeFilterManner)}>ماه پیش</div>
                        <div className='time_filter' onClick={() => setTimeFilterManner(! timeFilterManner)}>هفته پیش</div>
                        <div className='time_filter' onClick={() => setTimeFilterManner(! timeFilterManner)}>بروزترین</div>
                        <div className='time_filter' onClick={() => setTimeFilterManner(! timeFilterManner)}>جدیدترین</div>
                        <div className='time_filter' onClick={() => setTimeFilterManner(! timeFilterManner)}>قدیمی ترین</div>
                    </div>
                </div>
            </div>

            <div className={showFilterManner ? 'filter_after_show' : 'filter_after'}>
                <div className='black_layer'></div>
                <div className='time_filter_content'>
                    <FontAwesomeIcon className='close_icon' icon={faXmark} onClick={() => setShowFilterManner(! showFilterManner)} />
                    <div className='time_filter_content_tit'>فیلتر نمایش</div>
                    <div className='time_filters'>
                        <div className='time_filter' onClick={() => setShowFilterManner(! showFilterManner)}>همه</div>
                        <div className='time_filter' onClick={() => setShowFilterManner(! showFilterManner)}>محبوب ترین</div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default FilterBox;