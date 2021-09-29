import { Wrapper, PencilIcon, InputWrapper, Input, Star, ContentsWrapper, Contents, BottomWrapper, ContentsLength, Button } from './BoardCommentWrite.styles'

export default function BoardCommentWriteUI(props:any){
    return(
        <Wrapper>
            {!props.isEdit &&(
                <>
                    <PencilIcon src="/boardComment/write/pencil.png"/>
                    <span>댓글</span>
                </>
            )}
            <InputWrapper>
                <Input 
                    placeholder="작성자" 
                    onChange={props.onChangeWriter}
                    defaultValue={props.el?.writer}
                />
                
                <Input 
                    type="password" 
                    placeholder="비밀번호" 
                    onChange={props.onChangePassword}
                />
                <Star 
                    onChange={props.onChangeStar}
                    defaultValue={props.el?.rating}
                />
            </InputWrapper>

            <ContentsWrapper>
                <Contents
                    placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                    onChange={props.onChangeContents} 
                    defaultValue={props.el?.contents}
                    maxLength={100}
                    // maxLength는 <input> 에 있는 설정 값. (최대 길이 설정)
                />
                <BottomWrapper>
                    <ContentsLength>{props.myContents.length}/100</ContentsLength>
                                {/* myContents.length를 이용해서 길이 계산 */}
                    <Button
                        id={props.el?._id}
                        onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}>
                            {props. isEdit ? "수정하기" : "등록하기"}
                    </Button>
                </BottomWrapper>
            </ContentsWrapper>
        </Wrapper>
    )
}