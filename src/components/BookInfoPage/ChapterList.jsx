import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions.jsx'
import { getDataAndHeaders } from '../../fetch.js'
import { Link } from 'react-router-dom'

let preSize = [0, 0]
export default function ChapterList({ bookId, pageIndex }) {
  let lastPage = 0
  const [index, setIndex] = useState(pageIndex)
  const { width, height } = useWindowDimensions()
  console.log(width, height)
  const [chapterListData, setChapterListData] = useState({
    data: [],
    headers: {}
  })
  useEffect(() => {
    preSize = [width, height]
    getDataAndHeaders(`api/chapter?bookid=${bookId}&pageindex=${index}&pagesize=30`)
      .then(response => {
        setChapterListData({
          data: response.data,
          headers: JSON.parse(response.headers.get('x-pagination'))
        })
        lastPage = chapterListData.headers.totalPages
      })
  }, [index])

  let chapterList
  if (width < 640) {
    chapterList = <table className="table table-zebra w-full my-6 overflow-hidden">
      <tbody>
        {chapterListData.data.map((chapter, index) =>
          <tr key={chapter.chapterId}>
            <td className=" hover:text-primary w-full max-w-[1px] cursor-pointer">
              <div className="tooltip tooltip-bottom w-full text-left" data-tip={chapter.chapterName}>
                <Link to={`/chapter/${chapter.chapterId}`} className="truncate w-full">
                  <div className="truncate w-full">
                    {chapter.chapterName}
                  </div>
                </Link>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  }
  else if (width < 1224) {
    chapterList = <>
      <table className="table table-zebra w-full overflow-visible">
        <tbody>
          {chapterListData.data.map((chapter, index) => {
            return index % 2 == 0 &&
              <tr key={chapter.chapterId}>
                <td className=" hover:text-primary w-full max-w-[1px] cursor-pointer">
                  <div className="tooltip tooltip-bottom w-full text-left" data-tip={chapter.chapterName}>
                    <Link to={`/chapter/${chapter.chapterId}`} className="w-full">
                      <div className="truncate w-full">
                        {chapter.chapterName}
                      </div>
                    </Link>
                  </div>
                </td>
              </tr>
          })}
        </tbody>
      </table>
      <table className="sm:table table-zebra w-full hidden">
        <tbody>
          {chapterListData.data.map((chapter, index) => {
            let div = chapterListData.data.length % 2
            if (div == 1) chapterListData.data.push({ chapterId: chapterListData.data.length, chapterName: '⠀' })
            return index % 2 == 1 &&
              <tr key={chapter.chapterId}>
                <td className=" hover:text-primary w-full max-w-[1px] cursor-pointer">
                  <div className="tooltip tooltip-bottom w-full text-left" data-tip={chapter.chapterName}>
                    <Link to={`/chapter/${chapter.chapterId}`} className="truncate w-full">
                      <div className="truncate w-full">
                        {chapter.chapterName}
                      </div>
                    </Link>
                  </div>
                </td>
              </tr>
          })}
        </tbody>
      </table>
    </>
  } else {
    chapterList = <>
      <table className="table table-zebra w-full rounded-br-none">
        <tbody>
          {chapterListData.data.map((chapter, index) => {
            return index % 3 == 0 &&
              <tr key={chapter.chapterId}>
                <td className=" hover:text-primary w-full max-w-[1px] cursor-pointer">
                  <div className="tooltip tooltip-bottom w-full text-left" data-tip={chapter.chapterName}>
                    <Link to={`/chapter/${chapter.chapterId}`} className="truncate w-full">
                      <div className="truncate w-full">
                        {chapter.chapterName}
                      </div>
                    </Link>
                  </div>
                </td>
              </tr>
          })}
        </tbody>
      </table>
      <table className="sm:table table-zebra w-full hidden rounded-b-none">
        <tbody>
          {chapterListData.data.map((chapter, index) => {
            let div = chapterListData.data.length % 3
            if (div == 1) chapterListData.data.push({ chapterId: chapterListData.data.length, chapterName: '⠀' })
            return index % 3 == 1 &&
              <tr key={chapter.chapterId}>
                <td className=" hover:text-primary w-full max-w-[1px] cursor-pointer">
                  <div className="tooltip tooltip-bottom w-full text-left" data-tip={chapter.chapterName}>
                    <Link to={`/chapter/${chapter.chapterId}`} className="truncate w-full">
                      <div className="truncate w-full">
                        {chapter.chapterName}
                      </div>
                    </Link>
                  </div>
                </td>
              </tr>
          })}
        </tbody>
      </table>
      <table className="lg:table table-zebra w-full hidden">
        <tbody>
          {chapterListData.data.map((chapter, index) => {
            let div = chapterListData.data.length % 3
            if (div == 2) chapterListData.data.push({ chapterId: chapterListData.data.length + 1, chapterName: '⠀' })
            return index % 3 == 2 &&
              <tr key={chapter.chapterId}>
                <td className=" hover:text-primary w-full max-w-[1px] cursor-pointer">
                  <div className="tooltip tooltip-bottom w-full text-left" data-tip={chapter.chapterName}>
                    <Link to={`/chapter/${chapter.chapterId}`} className="truncate w-full">
                      <div className="truncate w-full">
                        {chapter.chapterName}
                      </div>
                    </Link>
                  </div>
                </td>
              </tr>
          })}
        </tbody>
      </table>
    </>
  }

  return (
    <>
      <div className=" w-full flex">
        {chapterList}
      </div >
      <div className="btn-group flex justify-center mt-6">
        <button className="btn btn-xs xs:btn-sm sm:btn-md"
          {...(chapterListData.headers.HasPrevious || { disabled: true })}
          onClick={() => setIndex(1)}
        >&lt;&lt;</button>
        <button className="btn btn-xs xs:btn-sm sm:btn-md"
          {...(chapterListData.headers.HasPrevious || { disabled: true })}
          onClick={() => setIndex(chapterListData.headers.CurrentPage - 1)}
        >&lt;</button>
        {getPageList(chapterListData.headers.CurrentPage, chapterListData.headers.TotalPages).map((page, index) =>
          <button className={`btn btn-xs xs:btn-sm sm:btn-md ${chapterListData.headers.CurrentPage == page && "btn-active"}`}
            onClick={() => setIndex(page)}
          >{page}</button>
        )}
        <button className="btn btn-xs xs:btn-sm sm:btn-md"
          {...(chapterListData.headers.HasNext || { disabled: true })}
          onClick={() => setIndex(chapterListData.headers.CurrentPage + 1)}
        >&gt;</button>
        <button className="btn btn-xs xs:btn-sm sm:btn-md"
          {...(chapterListData.headers.HasNext || { disabled: true })}
          onClick={() => setIndex(chapterListData.headers.TotalPages)}
        >&gt;&gt;</button>
      </div>
    </>
  )
}

const getPageList = (pageIndex, totalPages) => {
  let pageList = []
  if (pageIndex <= 3) {
    for (let i = 1; i <= 5; i++) {
      if (i > totalPages) break
      pageList.push(i)
    }
  } else if (pageIndex >= totalPages - 2) {
    for (let i = totalPages - 4; i <= totalPages; i++) {
      if (i == 0) continue
      pageList.push(i)
    }
  } else {
    for (let i = pageIndex - 2; i <= pageIndex + 2; i++) {
      pageList.push(i)
    }
  }
  return pageList
}


