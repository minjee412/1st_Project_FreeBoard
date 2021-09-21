import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardDetailUI from './BoardDetail.presenter'
import {FETCH_BOARD, DELETE_BOARD, LIKE_BOARD, DISLIKE_BOARD} from './BoardDetail.queries'

// fetchBoard(
// boardId: ID!
// ): Board!
export default function BoardDetailContainer (){
    const router = useRouter();
    const [deleteBoard] = useMutation(DELETE_BOARD);
    const { data } = useQuery(FETCH_BOARD,{
        variables: {boardId: router.query.boardId}
    })   // router.query 뒤에는 [] 파일명을 쓰자 ! ([]안에 파일명이 변수이기 때문에)
        // boardId를 variables에 싸서 FETCH_BOARD에 글 정보 요청 하자
       // 그리고 그 결과를 data에 넣자 
    const [likeBoard] = useMutation(LIKE_BOARD)
    const [dislikeBoard] = useMutation(DISLIKE_BOARD)
    

    async function onClickDelete(){
        try{
            await deleteBoard({
            variables: {boardId: router.query.boardId}}) // 주소에 있는 boardId를 기준으로 글을 삭제해줘 !!
        alert("게시글이 삭제 되었습니다.");
        router.push("/boards");
        
        } catch(error){
            alert(error.message)
        }
    }

    function onClickList(){
        router.push("/boards");
    }

    function onClickLike(){
        likeBoard({
            variables:{boardId: router.query.boardId},
            refetchQueries: [
            { query: FETCH_BOARD, variables: { boardId: router.query.boardId }}]
        })
    }

    function onClickDislike(){
        dislikeBoard({
            variables:{boardId: router.query.boardId},
            refetchQueries: [
            { query: FETCH_BOARD, variables: { boardId: router.query.boardId }}]
        })
    }

    function onClickMovetoEdit(){
        router.push(`/boards/${router.query.boardId}/edit`)
    }

    return(
        <BoardDetailUI 
        data={data}
        onClickList={onClickList}
        onClickDelete={onClickDelete}
        onClickLike={onClickLike}
        onClickDislike={onClickDislike}
        onClickMovetoEdit={onClickMovetoEdit}
        />
    )
}