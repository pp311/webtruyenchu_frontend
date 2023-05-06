import { React, useContext, useState, useEffect } from 'react'
import { getDataAndHeaders } from '../../fetch.js'
import { Link } from 'react-router-dom'
import { useReadingPageStore } from '../../hooks/useStore.jsx'
export default function ChapterListModal() {
  const bookId = useReadingPageStore(state => state.bookId)
  const [chapterListData, setChapterListData] = useState({
    data: [],
    headers: {},
  })

  const [index, setIndex] = useState(1)

  useEffect(() => {
    getDataAndHeaders(`api/chapter?bookid=${bookId}&pageindex=${index}`)
      .then(response => {
        setChapterListData({
          data: response.data,
          headers: JSON.parse(response.headers.get('x-pagination'))
        })
      })
  }, [index, bookId])

  return (
    <>
      <input type="checkbox" id="chapter-list-modal" className="modal-toggle" />
      <label htmlFor="chapter-list-modal" className="modal">
        <div className="modal-box relative">
          <div className="overflow-x-hidden">
            <label htmlFor="chapter-list-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h2 className="text-2xl font-bold text-center">Danh sách chương</h2>
            <table className="table table-zebra w-full my-6">
              <tbody>
                {Array.isArray(chapterListData.data) && chapterListData.data.map(chapter =>
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

            {/* <table className="table table-zebra w-full my-6"> */}
            {/*   <tbody> */}
            {/*     <tr> */}
            {/*       <td className="whitespace-normal hover:text-primary">Quality Control Specialist aaaaaaaaaaa aaaaaaaaaaaa</td> */}
            {/*     </tr> */}
            {/*   </tbody> */}
            {/* </table> */}
            {chapterListData.headers &&
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
              </div>}
          </div>
        </div>
      </label>
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

