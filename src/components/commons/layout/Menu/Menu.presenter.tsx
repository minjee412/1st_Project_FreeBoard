import {Navi, SingleMenu} from './Menu.styles'

export default function NaviUI(props){
    return(
        <Navi>
            <SingleMenu onClick={props.onClickBoard}>자유게시판</SingleMenu>
            <SingleMenu>중고마켓</SingleMenu>
            <SingleMenu>마이페이지</SingleMenu>
        </Navi>    
    )
}

