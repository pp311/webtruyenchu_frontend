import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faReply, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

export default function RatingComment(props) {
  return (
    <div>
      <div className="flex items-start">
        <div className="avatar mr-4">
          <div className="w-12 rounded-full">
            <img src="https://global.touhoulostword.com/assets/images/character/b_kirisame_on.png" />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col">
            <h3 className="font-bold">Phuc Phan</h3>
            <div className="flex items-center">
              <div className="mr-2 rating rating-md lg:rating-md rating-half items-center flex-wrap">
                <input type="radio" name="rating-3" disabled className="bg-orange-500 mask mask-star-2 " />
                <input type="radio" name="rating-3" disabled className="bg-orange-500 mask mask-star-2 " />
                <input type="radio" name="rating-3" disabled className="bg-orange-500 mask mask-star-2 " />
                <input type="radio" name="rating-3" disabled className="bg-orange-500 mask mask-star-2 " />
                <input type="radio" name="rating-3" disabled className="bg-orange-500 mask mask-star-2 " />
              </div>
              <b>5</b>
              <span className="text-neutral-500 ml-5"><FontAwesomeIcon icon={faClock} className="mr-2" />18 minutes ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className="xs:ml-16 flex flex-col">
        <p className="mt-2">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
        <div className="space-x-12 self-end mt-2">
          <span className="cursor-pointer hover:text-primary text-secondary"><FontAwesomeIcon icon={faThumbsUp} className="mr-2" />18</span>
          <span className="cursor-pointer hover:text-primary text-secondary"><FontAwesomeIcon icon={faReply} className="mr-2" />Reply</span>
        </div>
      </div>
      <div className="ml-16">
        {props.children}
      </div>
      <div className="divider"></div>
    </div>

  )
}
