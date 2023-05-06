import React from 'react'
import { Link } from 'react-router-dom'

export default function BookCoverListItem(props) {
  let indicator
  if (props.tag == "hot")
    indicator = < span className="indicator-item badge badge-error -right-3 -top-1 animate-bounce" > hot</span>
  else if (props.tag == "latest")
    indicator = < span className="indicator-item badge badge-success -right-3 -top-1 animate-bounce" > new</span>
  let genreList = []
  if (props.genres) {
    genreList = props?.genres.map(g => g.genreName)
  }
  return (
    <Link to={`/book/${props.bookId}`}>
      <div className="card indicator relative group cursor-pointer w-auto h-full bg-base-100 z-10 hover:z-30 hover:scale-105 transition-all shadow-xl dark:shadow-none image-full [&.card]:before:opacity-0 rounded-xl">
        {indicator}
        <figure><img src={`${props.posterUrl}`} className="" alt="Shoes" /></figure>
        <div className="card-body bg-gray-800 bg-opacity-70 py-2 px-2 rounded-b-xl bottom-0 mt-auto">
          <h2 className="card-title line-clamp-2 text-sm text-center">{props.bookName}</h2>
        </div>
        {/* Hover content */}
        <div className="absolute invisible lg:group-hover:visible opacity-0 group-hover:opacity-90 duration-300 transition-all pointer-events-none h-fit w-52 z-40 px-4 py-2 bg-base-200 left-[70%] top-[50%] -translate-y-1/2 rounded-xl">
          <div className="w-3 h-3 -mt-2 rotate-45 bg-base-200 absolute top-[20%] left-0 -translate-x-1/2"></div>
          <h2 className='font-bold text-md line-clamp-2 text-primary'>{props.bookName}</h2>
          {/* <div className="rating rating-sm flex items-center space-x-2"> */}
          {/*   <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" /> */}
          {/*   <span>3.82</span> */}
          {/* </div> */}
          <p className='line-clamp-6'><b>Mô tả: </b>{props.description}</p>
          <p className=''><b>Thể loại: </b>{genreList.join(", ")}</p>
        </div>
      </div>
    </Link>
  )
}
