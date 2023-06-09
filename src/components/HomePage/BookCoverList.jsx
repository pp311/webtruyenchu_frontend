import React, { useEffect, useState } from 'react'
import SectionTitle from '../commons/SectionTitle'
import BookCoverListItem from './BookCoverListItem'
import { getData } from '../../fetch.js'
import useFetch from '../../hooks/useFetch'
export default function BookCoverList(props) {
  const [data, setData] = useState([])
  let url = ""
  if (props.type === "random") {
    url = `api/book/random?limit=12`
  } else {
    url = `api/book?orderby=${props.type}&pagesize=12`
  }

  const { response, error, isLoading } = useFetch(url)
  let content = null
  if (isLoading) {
    content = <span className="loading loading-dots loading-lg"></span>
  } else {
    content = <div className='mt-2 grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 gap-3'>
      {response.map(item =>
        <BookCoverListItem {...item} key={item.bookId} tag={props.tag} />
      )}
    </div>
  }

  return (
    < div className="mt-6 lg:mt-8 xl:mt-10 2xl:mt-12" >
      <SectionTitle title={`${props.title}`} />
      {content}
    </div >
  )
}
