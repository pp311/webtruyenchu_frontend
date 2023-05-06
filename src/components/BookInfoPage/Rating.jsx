import RatingCommentInput from '../Comment/RatingCommentInput'
import RatingComment from '../Comment/RatingComment'
import ChildComment from '../Comment/ChildComment'
import CommentInput from '../Comment/CommentInput'
import RatingOverview from './RatingOverview'


export default function Rating() {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-6 items-start w-full mt-8">
        <RatingCommentInput />
        <RatingOverview />
      </div>
      <div className="divider"></div>
      <RatingComment />
      <RatingComment>
        <ChildComment />
        <CommentInput />
      </RatingComment>
    </div>
  )
}
