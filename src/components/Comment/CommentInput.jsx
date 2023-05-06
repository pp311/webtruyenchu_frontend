import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


export default function CommentInput() {
  return (
    <div>
      <div className="w-full flex items-start mt-8">
        <div className="avatar mr-4">
          <div className="w-12 rounded-full">
            <img src="https://global.touhoulostword.com/assets/images/character/b_kirisame_on.png" />
          </div>
        </div>
        <div className="w-full relative">
          <textarea className="textarea textarea-primary w-full textarea-bordered" placeholder="Bio"></textarea>
          <FontAwesomeIcon icon={faPaperPlane} className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-primary cursor-pointer " />
        </div>
      </div>
    </div>

  )
}
