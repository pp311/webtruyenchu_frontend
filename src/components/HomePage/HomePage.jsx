import React from 'react'
import BookCoverList from './BookCoverList'
import BookList from './BookList'
import BookRanking from './BookRanking'
import Carousel from './Carousel'

export default function HomePage() {
  return (
    <div className='px-4 mt-8 sm:px-12 md:px-20 lg:px-40 xl:px-48 2xl:px-80'>
      <Carousel />
      <BookCoverList type="viewcountmonth" title="Thịnh hành" tag="hot" />
      <BookList type="latestchapter" />
      <BookRanking />
      <BookCoverList type="random" title="Truyện ngẫu nhiên" />
      <BookCoverList type="ratingscore" title="Được đánh giá cao" tag="latest" />
    </div>
  )
}
