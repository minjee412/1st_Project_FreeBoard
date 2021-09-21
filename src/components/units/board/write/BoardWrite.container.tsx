import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD,  UPDATE_BOARD} from './BoardWrite.queries'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client';


export default function BoardWrite (props){
    const router = useRouter()

    const [isActive, setIsActive] = useState(false)
// 기본값을 false로 줘야 버튼 비활성화 및 배경색이 회색으로 나온다 !!!

    const [ writer, setWriter ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ contents, setContents ] = useState('')
    const [ youtube, setYoutube ] = useState('')
//  입력한값 state에 저장. 빈문자열로 초기화 

    const [ error_writer, error_setWriter ] = useState('')
    const [ error_password, error_setPassword ] = useState('')
    const [ error_title, error_setTitle ] = useState('')
    const [ error_contents, error_setContents ] = useState('')

    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    // onChange뒤에 모든 이벤트들에 (event)를 걸어주는게 맞으나, 아래 event를 쓰지 않는다면 생략 가능
    // 단, 아래 event를 쓸 경우에는 (event)를 반드시 써야 한다
    // onSubmit에 에러 조건을 작성하면 버튼을 눌러야지 에러메세지 판단이 가능하고,
    // onChange에 에러 조건을 걸면 만족한 즉시 에러메세지가 없어 진다.

    function onChangeWriter(event){
        setWriter(event.target.value) 
     //입력 된 value 값이 setWriter를 통해 writer값으로 들어 간다.
        if(event.target.value !== ""){
            error_setWriter("")
        }

        if(event.target.value !== ""&& password !== "" && title !== "" && contents !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    function onChangePassword(event){
        setPassword(event.target.value)
        if(event.target.value  !== ""){
            error_setPassword("")
        }
        if(writer !== "" && event.target.value !== "" && title !== "" && contents !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    function onChangeTitle(event){
        setTitle(event.target.value)
        if(event.target.value  !== ""){
            error_setTitle("")
        }

        if(writer !== "" && password !== "" && event.target.value !== "" && contents !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    function onChangeContents(event){
        setContents(event.target.value)
        if(event.target.value  !== ""){
            error_setContents("")
        }

        if(writer !== "" && password !== "" && title !== "" && event.target.value !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    function onChangeYoutube(event){
        setYoutube(event.target.value)
    }

    async function onClickSubmit(){
        if(writer === ""){
            error_setWriter("작성자를 입력해주세요.")
        }

        if(password === ""){
            error_setPassword("비밀번호를 입력해주세요.")
        }

        if(title === ""){
            error_setTitle("제목을 입력해주세요.")
        }

        if(contents === ""){
            error_setContents("내용을 입력해주세요.")
        }

        if(writer !== "" && password !== "" && title !== "" && contents !==""){
            try{
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer: writer,
                            password: password,
                            title: title,
                            contents: contents,
                            youtubeUrl:youtube
                        }
                    }
            }) 
                console.log(result)
                router.push(`/boards/${result.data.createBoard._id}`)
            }catch(error){
                console.log(error)
            }
            
        }
    }

    async function onClickUpdate(){

        try{const result = await updateBoard({
            variables: {
                boardId: router.query.boardId,
                password: password,
                updateBoardInput:{
                    title: title,
                    contents: contents
                }
            }
        })
            router.push(`/boards/${result.data.updateBoard._id}`);
        } catch(err){
            alert(err)
        }
    }

    return(
        <BoardWriteUI
            isActive={isActive}
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            // onClickUpdate={onClickUpdate}

            error_writer={error_writer}
            error_password={error_password}
            error_title={error_title}
            error_contents={error_contents}
            data={props.data}

            youtube={youtube}
            onChangeYoutube={onChangeYoutube}
            
            isEdit={props.isEdit}
            onClickUpdate={onClickUpdate}

            setWriter={setWriter}
        />
    )

}
