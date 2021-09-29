import BoardCommentWriteUI from './BoardCommnetWrite.presenter'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'

import {CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT} from './BoardCommentWrite.queries'
import {FETCH_BOARD_COMMENTS} from '../list/BoardCommentList.queries'


export default function BoardCommentWrite(props:any){
    const router = useRouter()
    const [myWriter, setMyWriter] = useState('')
    const [myPassword, setMyPassword] = useState('')
    const [myContents, setMyContents] = useState('')
    const [myStar, setMyStar] = useState(0) // 기본적으로 0점부터 시작이기 때문에 기본값을 0으로 준다.

    
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
    const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT)
    
    // 실행기능 function
    function onChangeWriter (event:any){
        setMyWriter(event.target.value)
    }

    function onChangePassword (event:any){
        setMyPassword(event.target.value)
    }

    function onChangeContents (event:any){
        setMyContents(event.target.value)
    }

    // ant디자인에서 <>안에 value가 들어오도록 해놨기 때문에 onChange 할때 (event)를 쓰지 않는다
    function onChangeStar(value:any){
        setMyStar(value) // 본인과 가장 가까운 {}를 찾고 그 안에 값이 없으면 그 다음 가까운 {}에서 값을 찾는다
    }

    async function onClickWrite(){
        try{
            await createBoardComment({
            variables:{
                createBoardCommentInput:{
                    writer: myWriter,
                    password: myPassword,
                    contents: myContents,
                    rating: myStar
                },
            boardId: String(router.query.boardId) // 여기 까지가 comment 등록
            },
        // 커멘트 등록 한걸 refetchQueries를 이용해서 불러오기
            refetchQueries: [
                {
                    query: FETCH_BOARD_COMMENTS,
                    variables: { boardId: router.query.boardId}
                }
            ]
            })
        }catch(error:any){
            alert(error.message)
        }
    }

    async function onClickUpdate(event:any){
        if(!myContents){
            alert("내용이 수정되지 않았습니다.");
            return;
        }

        if(!myPassword){
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try{
            await updateBoardComment({
                variables:{
                    updateBoardCommentInput: {contents:myContents},
                    password: myPassword,
                    boardCommentId: event.target.id
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId}
                    },
                ],
            });
                props.setIsEdit?.(false);
        } catch(error:any) {
            alert(error.message);
        }
    }

    return(
        <BoardCommentWriteUI 
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onChangeStar={onChangeStar}
        onClickWrite={onClickWrite}
        onClickUpdate={onClickUpdate}

        myContents={myContents} // 글자 수 카운팅 하기 위해서

        isEdit={props.isEdit}
        el={props.el}

        />
    )
}