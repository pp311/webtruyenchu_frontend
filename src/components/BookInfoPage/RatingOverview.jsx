import React from 'react'

export default function RatingOverview() {
  return (
    <div className="sm:basis-2/5 w-full border border-primary rounded-xl p-3 mb-4 bg-base-200">
      <div className="flex items-center justify-between">
        <span>
          Da co 12 danh gia
        </span>
        <div className="rating rating-sm rating-half items-center flex-wrap">
          <input type="radio" name="rating-2" disabled className="rating-hidden" />
          <input type="radio" name="rating-2" disabled className="bg-orange-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-2" disabled className="bg-orange-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-2" disabled className="bg-orange-500 mask mask-star-2 mask-half-1" checked />
          <input type="radio" name="rating-2" disabled className="bg-orange-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-2" disabled className="bg-orange-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-2" disabled className="bg-orange-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-2" disabled className="bg-orange-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-2" disabled className="bg-orange-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-2" disabled className="bg-orange-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-2" disabled className="bg-orange-500 mask mask-star-2 mask-half-2" />
          <span className="ml-2">3.42/5</span>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex justify-between items-center">
        <div className="rating rating-md lg:rating-md rating-half items-center flex-wrap">
          <input type="radio" name="rating-3" disabled className="rating-hidden" />
          <input type="radio" name="rating-3" disabled className="bg-orange-500 mask mask-star-2 " />
          <input type="radio" name="rating-3" disabled className="bg-orange-500 mask mask-star-2 " />
          <input type="radio" name="rating-3" disabled className="bg-orange-500 mask mask-star-2 " />
          <input type="radio" name="rating-3" disabled className="bg-orange-500 mask mask-star-2 " />
          <input type="radio" name="rating-3" disabled className="bg-orange-500 mask mask-star-2 " />
        </div>
        <div>
          4
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="rating rating-md lg:rating-md rating-half items-center flex-wrap">
          <input type="radio" name="rating-1" disabled className="rating-hidden" />
          <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 " />
          <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 " />
          <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 " />
          <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 " />
        </div>
        <div>
          4
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="rating rating-md lg:rating-md rating-half items-center flex-wrap">
          <input type="radio" name="rating-1" disabled className="rating-hidden" />
          <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 " />
          <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 " />
          <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 " />
        </div>
        <div>
          4
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="rating rating-md lg:rating-md rating-half items-center flex-wrap">
          <input type="radio" name="rating-1" disabled className="rating-hidden" />
          <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 " />
          <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 " />
        </div>
        <div>
          4
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="rating rating-md lg:rating-md rating-half items-center flex-wrap">
          <input type="radio" name="rating-1" disabled className="rating-hidden" />
          <input type="radio" name="rating-1" disabled className="bg-orange-500 mask mask-star-2 " />
        </div>
        <div>
          4
        </div>
      </div>
    </div>

  )
}
