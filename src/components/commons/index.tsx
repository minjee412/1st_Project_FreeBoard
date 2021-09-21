import styled from '@emotion/styled'
import Banner from './layout/Banner/Banner.container'
import Navi from './layout/Menu/Menu.container'


const Wrapper = styled.div``

const Top = styled.div`
    height: 50px;
    background-color: #efebe9;
`

const Body = styled.div`
    display: flex;
    justify-content: center;
`
export default function List(props){

    return(
        <Wrapper>
            <Top />
            <Banner/>
            <Navi />
            <Body>{props.children}</Body>
        </Wrapper>
    )

}