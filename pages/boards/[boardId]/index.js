import BoardDetailContainer  from '../../../src/components/units/board/detail/BoardDetail.container'
import BoardCommentWrite from '../../../src/components/units/boardComment/write/BoardCommnetWrite.container'
import CommentList from '../../../src/components/units/boardComment/list/BoardCommentList.container'

export default function BoardDetailPage(){
    return(
        <>
            <BoardDetailContainer />
            <BoardCommentWrite/>
            <CommentList />
        </>
    )
}