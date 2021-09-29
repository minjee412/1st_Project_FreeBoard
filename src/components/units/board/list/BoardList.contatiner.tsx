import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import BoardListUI from'./BoardList.presenter'
import {FETCH_BOARDS, FETCH_BOARDS_COUNT} from './BoardList.queries'

export default function BoardListContainer (){
    const [ startPage, setStartPage ] = useState(1)
    const {data,refetch} = useQuery(FETCH_BOARDS,{
        variables:{ page: startPage }
    })
    const router = useRouter()
    const {data:dataBoardsCount} = useQuery(FETCH_BOARDS_COUNT)
    // data 라는 이름을 겹치지 않게 쓰기 위해 data:dataBoardsCount로 정해주면
    // 지금 부터 FETCH_BOARDS_COUNT의 data는 dataBoardsCount로 쓰면 된다
    const lastPage = Math.ceil(dataBoardsCount ?.fetchBoardsCount / 10)

    function onClickMoveToRegi(){
        router.push("/boards/new_register");
    }

    // function onClickMoveToDetail(event){
    //     router.push(`/boards/${event.currentTarget.id}`)
    // }

    function onClickRow(event:any){
        router.push(`/boards/${event.currentTarget.id}`)
    }

    function onClickPage(event:any){
        refetch ({page : Number(event.target.id)})
    }

    function onClickPrevPage (){
        if(startPage <= 1) return; //early exit 패턴 이라고 한다.
        setStartPage((prev) => prev - 10);
    }

    function onClickNextPage(){
        if(startPage + 10 > lastPage) return; //early exit 이라고 한다.
        setStartPage((prev) => prev + 10);

        // 게시글 이상의 개별 페이지 보이지 않게 만들자 !!
        // && 나 삼항 연산자 사용
        // 각각의 페이지(startPage + index)가 <= 마지막페이지 일때만 페이지를 보여 준다.
    }
    
    return(
        <BoardListUI 
        data={data}
        onClickMoveToRegi={onClickMoveToRegi}
        // onClickMoveToDetail={onClickMoveToDetail}
        startPage={startPage}
        setStartPage={setStartPage}
        onClickPrevPage={onClickPrevPage}
        onClickPage={onClickPage}
        onClickNextPage={onClickNextPage}
        lastPage={lastPage}
        onClickRow={onClickRow}
        />
    )
}