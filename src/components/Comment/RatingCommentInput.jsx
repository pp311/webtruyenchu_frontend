import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

export default function RatingCommentInput() {
  const [rating, setRating] = useState(1)

  return (
    <div className=" basis-3/5 border-primary border-[1px] rounded-xl w-full overflow-hidden">
      <div className="flex items-center space-x-2 px-8 sm:px-16 py-8 border-b-[1px] border-primary bg-base-200">
        <input type="range" min="1" max="5" value={rating} className="range range-primary mr-2" onChange={(e) => setRating(e.target.value)} />
        <span>
          {rating}
        </span>
        <div className="mask mask-star-2 bg-orange-500 h-4 w-4">
        </div>
      </div>
      <div className="relative">
        <textarea className="textarea textarea-lg w-full focus:outline-0" placeholder="Bio"></textarea>
        <FontAwesomeIcon icon={faPaperPlane} className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-primary cursor-pointer " />
      </div>
    </div>

  )
}
