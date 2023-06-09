import React, { useEffect, useState } from 'react'
import SectionTitle from '../commons/SectionTitle'
import { Link } from 'react-router-dom'
import { getData } from '../../fetch.js'
import useFetch from '../../hooks/useFetch'

export default function BookRanking() {
  const rankingBadge = ["badge-error", "badge-warning", "badge-info", "", "", "", "", "", "", ""]
  // const [mostReading, setMostReading] = useState([])
  // const [mostRating, setMostRating] = useState([])
  // const [mostSaved, setMostSaved] = useState([])
  // useEffect(() => {
  //   getData("api/book/ranking?orderby=viewcount")
  //     .then(fetchData => {
  //       setMostReading(fetchData)
  //     })
  //   getData("api/book/ranking?orderby=ratingcount")
  //     .then(fetchData => {
  //       setMostRating(fetchData)
  //     })
  //   getData("api/book/ranking?orderby=savedcount")
  //     .then(fetchData => {
  //       setMostSaved(fetchData)
  //     })
  // }
  //   , [])

  const { response: mostReading, error, isLoading } = useFetch("api/book/ranking?orderby=viewcount")
  const { response: mostRating, error: error2, isLoading: isLoading2 } = useFetch("api/book/ranking?orderby=ratingcount")
  const { response: mostSaved, error: error3, isLoading: isLoading3 } = useFetch("api/book/ranking?orderby=savedcount")

  return (
    <div className="mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 flex space-x-4 font-bold">
      <div className="overflow-x-auto w-full">
        <SectionTitle title="Đọc nhiều nhất" />
        {isLoading && <span className="loading loading-lg loading-dots"></span>}
        <table className="table table-zebra w-full">
          <tbody>
            {!isLoading && mostReading.map((item, index) =>
              <tr key={item.bookId}>
                <th><span className={`badge ${rankingBadge[index]}`}>{index + 1}</span></th>
                <td className="w-full truncate max-w-[1px]"><Link to={`/book/${item.bookId}`} className="hover:text-primary">{item.bookName}</Link></td>
                <td className="w-0 text-right" >{item.orderValue}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto w-full hidden md:block">
        <SectionTitle title="Review nhiều nhất" />
        {isLoading2 && <span className="loading loading-lg loading-dots"></span>}
        <table className="table table-zebra w-full">
          <tbody>
            {!isLoading2 && mostRating.map((item, index) =>
              <tr key={item.bookId}>
                <th><span className={`badge ${rankingBadge[index]}`}>{index + 1}</span></th>
                <td className="w-full truncate max-w-[1px]"><Link to={`/book/${item.bookId}`} className="hover:text-primary">{item.bookName}</Link></td>
                <td className="w-0 text-right" >{item.orderValue}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto w-full hidden 2xl:block">
        <SectionTitle title="Lưu trữ nhiều nhất" />
        {isLoading3 && <span className="loading loading-lg loading-dots"></span>}
        <table className="table table-zebra w-full">
          <tbody>
            {!isLoading3 && mostSaved.map((item, index) =>
              <tr key={item.bookId}>
                <th><span className={`badge ${rankingBadge[index]}`}>{index + 1}</span></th>
                <td className="w-full truncate max-w-[1px]"><Link to={`/book/${item.bookId}`} className="hover:text-primary">{item.bookName}</Link></td>
                <td className="w-0 text-right" >{item.orderValue}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
