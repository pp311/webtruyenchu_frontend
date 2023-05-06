import React from 'react'
import CommentInput from './CommentInput'
import ParentComment from './ParentComment'
import ChildComment from './ChildComment'


export default function Comment() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <span className='font-bold text-xl'>182 binh luan</span>
        <select className="select select-bordered w-40 max-w-xs">
          <option selected>Moi nhat</option>
          <option>Cu nhat</option>
          <option>Luot thich</option>
        </select>
      </div>
      <CommentInput />
      <div className="divider"></div>
      <div>
        <ParentComment />
        <ParentComment>
          <ChildComment />
          <ChildComment />
          <CommentInput />
        </ParentComment>
        <ParentComment />
      </div>
    </div>

  )
}
