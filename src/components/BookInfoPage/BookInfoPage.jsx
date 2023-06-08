import React, { useEffect, useState } from 'react'
import BookInfoHero from './BookInfoHero'
import Rating from './Rating'
import Comment from '../Comment/Comment'
import BookDescription from './BookDescription'
import ChapterList from './ChapterList'
import { useParams } from 'react-router-dom'
import { getData } from '../../fetch.js'
import useFetch from '../../hooks/useFetch'

export default function BookInfoPage() {
  const bookId = useParams().bookId
  const [bookInfo, setBookInfo] = useState({})
  const [currentTab, setCurrentTab] = useState(0)
  const [chapterListPageIndex, setChapterListPageIndex] = useState(1)
  // useEffect(() => {
  //   getData(`api/book/${bookId}`)
  //     .then(fetchData => {
  //       setBookInfo(fetchData)
  //     })
  // }, [bookId])
  // refetch data when bookId changes
  const { response, error } = useFetch(`api/book/${bookId}`)
  console.log(response)
  return (
    <div className='px-4 mt-8 sm:px-12 md:px-20 lg:px-40 xl:px-48 2xl:px-80'>
      <BookInfoHero {...bookInfo} />
      <div className="tabs w-full mx-auto mt-8 justify-center items-end  
         before:flex-1 before:h-[1px] before:bg-primary
         after:flex-1 after:h-[1px] after:bg-primary">
        <a className={`tab tab-sm xs:tab-md sm:tab-lg px-2 tab-lifted ${currentTab === 0 ? "tab-active" : ""} [--tab-border-color:hsl(var(--p))] border-primary`} onClick={() => setCurrentTab(0)}>Giới thiệu</a>
        <a className={`tab tab-sm xs:tab-md sm:tab-lg px-2 tab-lifted ${currentTab === 1 ? "tab-active" : ""} [--tab-border-color:hsl(var(--p))] border-primary`} onClick={() => setCurrentTab(1)}>DS Chương</a>
        <a className={`tab tab-sm xs:tab-md sm:tab-lg px-2 tab-lifted ${currentTab === 2 ? "tab-active" : ""} [--tab-border-color:hsl(var(--p))] border-primary`} onClick={() => setCurrentTab(2)}>Bình luận</a>
        <a className={`tab tab-sm xs:tab-md sm:tab-lg px-2 tab-lifted ${currentTab === 3 ? "tab-active" : ""} [--tab-border-color:hsl(var(--p))] border-primary`} onClick={() => setCurrentTab(3)}>Đánh giá</a>
      </div>
      <div className="mt-4">
        {currentTab === 0 && <BookDescription desc={bookInfo.description} />}
        {currentTab === 1 && <ChapterList bookId={bookInfo.bookId} pageIndex={chapterListPageIndex} />}
        {currentTab === 2 && <Comment />}
        {currentTab === 3 && <Rating />}
      </div>
    </div >
  )
}
