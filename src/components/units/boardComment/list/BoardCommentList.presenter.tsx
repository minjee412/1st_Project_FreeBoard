import CommentListItemUI from './BoardCommentList.presenterItem'

//여기는 리스트를 뿌려주기 위한 페이지일 뿐입니다
//핵심 알맹이는 presenterItem 입니다
//presenter에 다 같이 있으면 하나를 수정하기를 눌러도
//코드가 다 연결 되어 있어 죄다 수정하기 상태로 변경 됨
export default function CommentListUI(props:any){
    return(
        <>
            {props.data?.fetchBoardComments.map((el:any) => ( 
            <CommentListItemUI key = {el._id} el={el}/> // isEdit / setIsEdit
            //보기에는 한줄이어도, map으로 돌렸기 때문에 총 10줄이 있는것과 동일하다         
            // <CommentListItemUI key = {el._id} el={el}/>  // isEdit / setIsEdit
            // <CommentListItemUI key = {el._id} el={el}/>  // isEdit / setIsEdit
            // <CommentListItemUI key = {el._id} el={el}/>  // isEdit / setIsEdit
            // <CommentListItemUI key = {el._id} el={el}/>  // isEdit / setIsEdit
            // <CommentListItemUI key = {el._id} el={el}/>  // isEdit / setIsEdit
            // <CommentListItemUI key = {el._id} el={el}/>  // isEdit / setIsEdit
            // <CommentListItemUI key = {el._id} el={el}/>  // isEdit / setIsEdit
            // <CommentListItemUI key = {el._id} el={el}/>  // isEdit / setIsEdit
            ))}
        </>
    )
}