import React, { useEffect, useState } from 'react'
import SectionTitle from '../commons/SectionTitle'
import BookCoverListItem from './BookCoverListItem'
import { getData } from '../../fetch.js'
export default function BookCoverList(props) {
  const [data, setData] = useState([])
  let url = ""
  if (props.type === "random") {
    url = `api/book/random?limit=12`
  } else {
    url = `api/book?orderby=${props.type}&pagesize=12`
  }

  useEffect(() => {
    getData(url)
      .then(fetchData => {
        setData(fetchData)
      })
  }, [])
  return (
    < div className="mt-6 lg:mt-8 xl:mt-10 2xl:mt-12" >
      <SectionTitle title={`${props.title}`} />
      <div className='mt-2 grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 gap-3'>
        {data.map(item =>
          <BookCoverListItem {...item} key={item.bookId} tag={props.tag} />
        )}
      </div>
    </div >
  )
}
