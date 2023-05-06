import React, { useEffect, useState } from 'react'
import SectionTitle from '../commons/SectionTitle'
import { Link } from 'react-router-dom'
import { getData } from '../../fetch.js'

export default function BookList(props) {
  const [data, setData] = useState([])

  let url = ""
  if (props.type === "latestchapter") {
    url = "api/chapter/latest"
  }
  useEffect(() => {
    getData(url)
      .then(fetchData => {
        fetchData.createdAt = new Date(Date.parse(fetchData.createdAt)).toUTCString()
        fetchData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        //calc time difference from now in minutes or hours or days or months
        fetchData.forEach(item => {
          let timeDiff = Math.abs(Date.now() - new Date(item.createdAt))
          let diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
          let diffHours = Math.ceil(timeDiff / (1000 * 60 * 60))
          let diffMinutes = Math.ceil(timeDiff / (1000 * 60))
          if (diffDays > 30) {
            item.createdAt = `${Math.floor(diffDays / 30)} tháng trước`
          } else if (diffDays > 1) {
            item.createdAt = `${diffDays} ngày trước`
          } else if (diffHours > 1) {
            item.createdAt = `${diffHours} giờ trước`
          } else {
            item.createdAt = `${diffMinutes} phút trước`
          }
        })
        setData(fetchData)
      })
  }, [])

  return (
    <div className="mt-6 lg:mt-8 xl:mt-10 2xl:mt-12">
      <SectionTitle title="Mới cập nhật" />
      <div className="">
        <table className="table table-zebra w-full">
          <tbody>
            {data.map((item) =>
              <tr>
                <td className='w-1/2 sm:w-2/5 lg:w-1/3 max-w-[1px]'>
                  <Link to={`/book/${item.bookId}`} className="hover:text-primary">
                    <div className="tooltip tooltip-bottom w-full text-left" data-tip={item.bookName}>
                      <div className="truncate w-full">
                        {item.bookName}
                      </div>
                    </div>
                  </Link>
                </td>
                <td className='w-1/2 sm:w-2/5 lg:w-1/3 max-w-[1px]'>
                  <Link to={`/chapter/${item.chapterId}`} className="hover:text-primary">
                    <div className="tooltip tooltip-bottom w-full text-left" data-tip={item.chapterName}>
                      <div className="truncate w-full">
                        {item.chapterName}
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="truncate w-1/5 hidden lg:table-cell max-w-[1px]">
                  <a href='#' className="hover:text-primary">
                    {item.authorName}
                  </a>
                </td>
                <td className="whitespace-nowrap hidden sm:table-cell text-right text-base-content">{item.createdAt}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
