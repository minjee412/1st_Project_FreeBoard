import {
  Title,
  Wrapper,
  Writer_Wrapper,
  Input_Wrapper,
  Label,
  Writer,
  Password,
  Subject,
  Contents,
  Zipcode_Wrapper,
  Zipcode,
  SearchButton,
  Address,
  Youtube,
  OptionWrapper,
  Image_Wrapper,
  UploadButton,
  RadioButton,
  RadioRabel,
  Button_Wrapper,
  SubmitButton,
  Error,
} from "./BoardWrite.styles";

import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { withAuth } from "../../../commons/withAuth";

const BoardWriteUI = (props: any) => {
  return (
    <>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} autoClose />
        </Modal>
      )}

      <Wrapper>
        <Title> {props.isEdit ? "게시판 수정" : "게시판 등록"} </Title>

        <Writer_Wrapper>
          <Input_Wrapper>
            <Label>작성자</Label>
            <Writer
              type="text"
              placeholder={"이름을 입력 해주세요."}
              onChange={props.onChangeWriter}
              // disabled={props.isEdit}
              // readOnly={Boolean(props.data?.fetchBoard.setWriter)}
              defaultValue={props.data?.fetchBoard.writer}
            />
            <Error>{props.error_writer}</Error>
          </Input_Wrapper>
          <Input_Wrapper>
            <Label>비밀번호</Label>
            <Password
              type="password"
              placeholder={
                props.isEdit
                  ? "비밀번호가 일치 해야 합니다."
                  : "비밀번호를 입력해주세요."
              }
              onChange={props.onChangePassword}
            />
            <Error>{props.error_password}</Error>
          </Input_Wrapper>
        </Writer_Wrapper>

        <Input_Wrapper>
          <Label>제목</Label>
          <Subject
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <Error>{props.error_title}</Error>
        </Input_Wrapper>

        <Input_Wrapper>
          <Label>내용</Label>
          <Contents
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <Error>{props.error_contents}</Error>
        </Input_Wrapper>

        <Input_Wrapper>
          <Label>주소</Label>
          <Zipcode_Wrapper>
            <Zipcode
              type="text"
              placeholder="07250"
              readOnly
              value={
                props.zipcode || props.data?.fetchBoard.boardAddress?.zipcode
              }
            />
            <SearchButton onClick={props.onClickAddressSearch}>
              우편번호 검색
            </SearchButton>
          </Zipcode_Wrapper>
          <Address
            readOnly
            value={
              props.address || props.data?.fetchBoard.boardAddress?.address
            }
            // || 앞이 false이면 || 뒤를 실행 , || 앞이 true이면 || 앞을 실행.
          />
          <Address
            onChange={props.onChangeAddressDetail}
            defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail}
          />
        </Input_Wrapper>

        <Input_Wrapper>
          <Label>유튜브</Label>
          <Youtube
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutube}
            defaultValue={props.data?.fetchBoard.youtubeUrl}
          >
            {props.youtbe}
          </Youtube>
        </Input_Wrapper>

        <Image_Wrapper>
          <Label>사진첨부</Label>

          {/* 
          /////////////1차 이미지 실습 ///////////////////////////
          <UploadButton onClick={props.onClickButton}>
            <div>+</div>
            <div>Up load</div>
          </UploadButton>
          <input
            type="file"
            style={{ display: "none" }}
            ref={props.fileRef}
            onChange={props.onChangeFiles}
          ></input>

          <UploadButton onClick={props.onClickButton}>
            <div>+</div>
            <div>Up load</div>
          </UploadButton>
          <input
            type="file"
            style={{ display: "none" }}
            ref={props.fileRef}
            onChange={props.onChangeFiles}
          ></input>

          <UploadButton onClick={props.onClickButton}>
            <div>+</div>
            <div>Up load</div>
          </UploadButton>
          <input
            type="file"
            style={{ display: "none" }}
            ref={props.fileRef}
            onChange={props.onChangeFiles}
          ></input> 
          /////////////////////////////////////////////////////// 
          */}

          {/* ////////////// 2차 이미지 실습 /////////////////////////// */}
          {new Array(3).fill(1).map((el, index) => (
            <Uploads01
              key={`${el}_${index}`}
              index={index}
              onChangeFiles={props.onChangeFiles}
            />
          ))}
          {/* ////////////// 2차 이미지 실습 /////////////////////////// */}
        </Image_Wrapper>

        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" name="main_setting" />
          <RadioRabel>유튜브</RadioRabel>
          <RadioButton type="radio" name="main_setting" />
          <RadioRabel>사진</RadioRabel>
        </OptionWrapper>

        <Button_Wrapper>
          {!props.isEdit && (
            <>
              <SubmitButton
                onClick={props.onClickSubmit}
                isActive={props.isActive}
                disabled={!props.isActive}
              >
                등록하기
              </SubmitButton>
            </>
          )}
          {/* isActive와 disabled는 임의로 만든 함수(기능) */}
          {/* isActive 가 true일때는 disabled가 비활성화 되고, isActive가 false일때는 disabled가 활성화 되어야 되기 때문에 조건을 반대로 줘야 한다. */}

          {props.isEdit && (
            <SubmitButton onClick={props.onClickUpdate} isActive={true}>
              수정하기
            </SubmitButton>
          )}
        </Button_Wrapper>
      </Wrapper>
    </>
  );
};

export default withAuth(BoardWriteUI);
