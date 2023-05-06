import { React, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faFileText, faBook, faClock, faGear, faList, faComment } from '@fortawesome/free-solid-svg-icons'
import Comment from '../Comment/Comment'
import BottomBar from './BottomBar'
import { Link, useParams } from 'react-router-dom'
import { getData, getDataAndHeaders } from '../../fetch.js'
import { shallow } from 'zustand/shallow'
import { useReadingPageStore } from '../../hooks/useStore.jsx'

const toggleBottomNav = () => {
  document.getElementById("btm-nav").classList.toggle("hidden")
}

export default function ReadingPage() {
  const chapterId = useParams().chapterId

  const readingConfig = useReadingPageStore(state => ({
    fontFamily: state.fontFamily,
    fontSize: state.fontSize,
    lineHeight: state.lineHeight,
    backgroundColor: state.backgroundColor,
    textColor: state.textColor
  }), shallow)

  const [chapterData, setChapterData] = useState({})
  useEffect(() => {
    getData(`api/chapter/${chapterId}`)
      .then(fetchData => {
        setChapterData(fetchData)
        useReadingPageStore.setState({ bookId: fetchData.bookId })
      })
  }, [chapterId])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chapterData]);

  return (
    <div className={`${readingConfig.backgroundColor}`}>
      <div className="btn-group btn-group-vertical fixed right-0 top-40 w-10 hidden sm:block ">
        <label htmlFor="setting-modal" className="btn btn-active"><FontAwesomeIcon icon={faGear} /></label>
        <label htmlFor="chapter-list-modal" className="btn"><FontAwesomeIcon icon={faList} /></label>
        <a href="#comment" className="btn"><FontAwesomeIcon icon={faComment} /></a>
      </div>
      <div className='px-4 mt-8 sm:px-12 md:px-20 lg:px-40 xl:px-48 2xl:px-80'>

        {/* Previous/Next chapter */}
        <div className='btn-group grid grid-cols-2 mb-10 '>
          <Link className={`btn btn-outline btn-secondary ${chapterData.previousChapterId == 0 ? "btn-disabled" : ""}`} to={`/chapter/${chapterData.previousChapterId}`}><FontAwesomeIcon icon={faArrowLeft} className="mr-2" />Chương trước</Link>
          <Link className={`btn btn-outline btn-secondary ${chapterData.nextChapterId == 0 ? "btn-disabled" : ""}`} to={`/chapter/${chapterData.nextChapterId}`}>Chương sau<FontAwesomeIcon icon={faArrowRight} className="ml-2" /></Link>
        </div>
        {/* Header */}
        <div className='mt-12'>
          <div className='leading-8 text-neutral-400'>
            <h2 className="text-2xl font-bold text-base-content">{chapterData.chapterName}</h2>
            <Link to={`/book/${chapterData.bookId}`}><FontAwesomeIcon icon={faBook} className="mr-2" />{chapterData.bookName}</Link>
            <p><FontAwesomeIcon icon={faFileText} className="mr-2" />{chapterData.wordCount} chữ</p>
            <p><FontAwesomeIcon icon={faClock} className="mr-2" />{chapterData.modifiedAt && new Date(Date.parse(chapterData.modifiedAt)).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ")}</p>
          </div>
        </div>
        {/* Content */}
        <div className={`mt-6 mb-16`}>
          <p className={`whitespace-pre-line tracking-wide [word-spacing:2px] ${readingConfig.textColor} ${readingConfig.lineHeight} ${readingConfig.fontSize} ${readingConfig.fontFamily}`}
            onClick={toggleBottomNav}>
            {chapterData.content && chapterData.content.replace(/\n/g, '\n\n')}
          </p>
        </div>
        {/* Previous/Next chapter */}
        <div className='btn-group grid grid-cols-2 mb-10'>
          <Link className={`btn btn-outline btn-secondary ${chapterData.previousChapterId == 0 ? "btn-disabled" : ""}`} to={`/chapter/${chapterData.previousChapterId}`}><FontAwesomeIcon icon={faArrowLeft} className="mr-2" />Chương trước</Link>
          <Link className={`btn btn-outline btn-secondary ${chapterData.nextChapterId == 0 ? "btn-disabled" : ""}`} to={`/chapter/${chapterData.nextChapterId}`}>Chương sau<FontAwesomeIcon icon={faArrowRight} className="ml-2" /></Link>
        </div>
        <div id="comment">
          <Comment />
        </div>
        <BottomBar />
      </div >
    </div>
  )
}
