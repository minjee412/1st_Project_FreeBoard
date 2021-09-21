import { Title, Wrapper, Writer_Wrapper, Input_Wrapper, Label, Writer, Password, 
        Subject, Contents, Zipcode_Wrapper, Zipcode, SearchButton, Address, Youtube, 
        OptionWrapper, Image_Wrapper, UploadButton, RadioButton, RadioRabel, Button_Wrapper,
        SubmitButton, Error
} from './BoardWrite.styles';



export default function BoardWriteUI(props){

    return(
        <Wrapper>
            <Title> {props.isEdit ? "게시판 수정" : "게시판 등록"} </Title>

            <Writer_Wrapper>
                <Input_Wrapper>
                    <Label>작성자</Label>
                    <Writer 
                        type="text" 
                        placeholder={props.isEdit ? "작성자 수정이 불가능 합니다." : "이름을 입력 해주세요."}
                        onChange = {props.onChangeWriter}
                        disabled={props.isEdit}
                        readOnly={Boolean(props.data?.fetchBoard.setWriter)}
                    />
                    <Error>{props.error_writer}</Error>
                </Input_Wrapper>
                <Input_Wrapper>
                    <Label>비밀번호</Label>
                    <Password 
                        type="text" 
                        placeholder="비밀번호를 입력해주세요." 
                        onChange = {props.onChangePassword}
                    />
                    <Error>{props.error_password}</Error>
                </Input_Wrapper>
            </Writer_Wrapper>

            <Input_Wrapper>
                <Label>제목</Label>
                <Subject 
                    type="text" 
                    placeholder="제목을 작성해주세요."
                    onChange = {props.onChangeTitle} 
                />
                <Error>{props.error_title}</Error>
            </Input_Wrapper>

            <Input_Wrapper>
                <Label>내용</Label>
                <Contents 
                    placeholder="내용을 작성해주세요."
                    onChange = {props.onChangeContents} 
                />
                <Error>{props.error_contents}</Error>
            </Input_Wrapper>
            
            <Input_Wrapper>
                <Label>주소</Label>
                <Zipcode_Wrapper>
                    <Zipcode type="text" placeholder="07250" />
                    <SearchButton>우편번호 검색</SearchButton>
                </Zipcode_Wrapper>
                <Address />
                <Address />
            </Input_Wrapper>

            <Input_Wrapper>
                <Label>유튜브</Label>
                <Youtube 
                    placeholder="링크를 복사해주세요."
                    onChange={props.onChangeYoutube}
                > 
                    {props.youtbe}
                </Youtube>
            </Input_Wrapper>

            <Image_Wrapper>
                <Label>사진첨부</Label>
                <UploadButton>
                    <div>+</div>
                    <div>Up load</div>
                </UploadButton>
                <UploadButton>
                    <div>+</div>
                    <div>Up load</div>
                </UploadButton>
                <UploadButton>
                    <div>+</div>
                    <div>Up load</div>
                </UploadButton>
            </Image_Wrapper>

            <OptionWrapper>
                <Label>메인설정</Label>
                <RadioButton type="radio"/>
                <RadioRabel>유튜브</RadioRabel>
                <RadioButton type="radio"/>
                <RadioRabel>사진</RadioRabel>
            </OptionWrapper>

            <Button_Wrapper>
                {!props.isEdit &&(
                <SubmitButton 
                    onClick={props.onClickSubmit} 
                    isActive={props.isActive} 
                    disabled={!props.isActive}>
                        등록하기
                </SubmitButton>
                )}
                {/* isActive와 disabled는 임의로 만든 함수(기능) */}
                {/* isActive 가 true일때는 disabled가 비활성화 되고, isActive가 false일때는 disabled가 활성화 되어야 되기 때문에 조건을 반대로 줘야 한다. */}
                    
                {props.isEdit && (
                <SubmitButton onClick={props.onClickUpdate} isActive={true}>수정하기</SubmitButton>)}
            </Button_Wrapper>
        </Wrapper>
    )

}