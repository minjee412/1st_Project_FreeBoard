import {Page, Pagenation, ColumnHeaderTitle1, ColumnHeaderTitle, ColumnHeaderBasic, Row, TableBottom, TableTop, Wrapper, Footer, Button, PencilIcon} from './BoardList.styles'

export default function BoardListUI(props){
    return(
        <Wrapper>
            <TableTop />
            <Row>
            <ColumnHeaderBasic>번호</ColumnHeaderBasic>
            <ColumnHeaderTitle1>제목</ColumnHeaderTitle1>
            <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
            <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
            </Row>
            {props.data?.fetchBoards.map((el,index) => (
            <Row key={el._id} id={el._id} onClick={props.onClickRow}>
                {/* 
                    이번트 버블링: 자식 (title, writer, createdAt)중 아무곳에나 클릭(이벤트) 해도
                    부모에게 이벤트가 전파 되어, 부모에서 설정한 function이 실행 된다(currentTarget) 
                */}
            <ColumnHeaderBasic>{10-index}</ColumnHeaderBasic>
            <ColumnHeaderTitle >{el.title}</ColumnHeaderTitle>
            <ColumnHeaderBasic>{el.writer}</ColumnHeaderBasic>
            <ColumnHeaderBasic>{el.createdAt}</ColumnHeaderBasic>
            </Row>
            ))}
            <TableBottom />
            <Footer>
                <Pagenation>
                    <Page onClick={props.onClickPrevPage}> 이전 </Page>
                    {/* 1,1,1,1,1,1,1,1,1,1 은 배열이 10개라는걸 표시해주기 위함(그 외 쓸모는 없다.) */}
                    {new Array(10).fill(1).map(
                        (_,index) => 
                            props.startPage + index <= props.lastPage &&(
                                <Page 
                                    key={props.startPage+index} 
                                    onClick={props.onClickPage} 
                                    id={String(props.startPage+index)}>
                                    {props.startPage+index}
                                </Page>)
                    )}
                    {/* {[1,1,1,1,1,1,1,1,1,1].map((_,index) => (
                    <Page key={props.startPage+index} onClick={props.onClickPage} id={String(props.startPage+index)}>
                        {props.startPage+index}
                    </Page>
                    ))} */}
                    
                    <Page onClick={props.onClickNextPage}> 다음 </Page>
                </Pagenation>
                <Button onClick={props.onClickMoveToRegi}>
                    <PencilIcon src="/board/list/write.png"/>
                    게시물 등록하기
                </Button>
            </Footer>
        </Wrapper>
    )
}