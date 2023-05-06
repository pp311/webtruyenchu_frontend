import React from 'react'

export default function BookInfoHero(props) {
  return (
    <div>
      <div className="hero bg-base-300 rounded-xl max-w-[700px] lg:max-w-[850px] xl:max-w-[1000px] mx-auto">
        <div className="hero-content flex-col items-stretch xs:flex-row overflow-hidden">
          <div className='overflow-hidden rounded-xl basis-2/5 lg:basis-1/3 xl:basis-1/4'>
            <img src={`${props.posterUrl}`} className="w-full h-full object-cover shadow-2xl hover:scale-110 transition-all duration-300" />
          </div>
          <div className="basis-3/5 lg:basis-2/3 xl:basis-3/4 flex flex-col justify-between ">
            <h2 className="text-2xl md:text-4xl font-bold line-clamp-2 ">{props.bookName}</h2>
            <span className="md:mt-3"><a href="#" className="line-clamp-1 hover:text-primary text-lg md:text-xl inline">{props.authorName}</a></span>
            <div className="flex flex-wrap max-h-[64px] md:max-h-[84px] overflow-hidden">
              <div className="badge badge-outline badge-lg badge-error mr-2 mt-2 md:mr-4 md:mt-4 cursor-pointer">
                {props.status == 'ongoing' ? 'Đang ra' : 'Hoàn thành'}
              </div>
              {props?.genres && props.genres.map((item, index) =>
                <div className="badge badge-outline badge-lg badge-success mr-2 mt-2 md:mr-4 md:mt-4 cursor-pointer">
                  {item.genreName}
                </div>
              )}
            </div>
            <div className="flex justify-evenly mt-2 md:mt-4">
              <div className='space-x-1 flex flex-col items-center'>
                <span className="font-bold">{props.chapterCount}</span><span>Chương</span>
              </div>
              <div className='space-x-1 flex flex-col items-center'>
                <span className="font-bold">{props.viewCount}</span><span>Lượt đọc</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-3 mb-2 md:mt-5">
              <div className="rating rating-sm lg:rating-md rating-half items-center flex-wrap">
                <input type="radio" name="rating-1" disabled className="rating-hidden" checked />
                <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 mask-half-2" />
                <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 mask-half-2" />
                <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 mask-half-2" />
                <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 mask-half-2" />
                <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 mask-half-2" />
                <span className="ml-2">{props.rating}/5 ({props.ratingCount} luot danh gia)</span>
              </div>
            </div>
            <div className='mt-2 sm:grid grid-cols-2 space-x-4 hidden sm:mt-auto'>
              <button className="btn btn-active btn-primary">Đọc truyện</button>
              <button className="btn btn-active btn-secondary">Theo dõi</button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full space-x-4 mt-4 sm:hidden">
        <button className="btn btn-active btn-primary">Đọc truyện</button>
        <button className="btn btn-active btn-secondary">Theo dõi</button>
      </div>
    </div>
  )
}
