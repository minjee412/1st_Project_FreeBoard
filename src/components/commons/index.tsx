import styled from '@emotion/styled'
import Header from './layout/Header/Header.container'
import Banner from './layout/Banner/Banner.container'
import Navi from './layout/Menu/Menu.container'


const Wrapper = styled.div``

const Body = styled.div`
    display: flex;
    justify-content: center;
`
export default function List(props){

    return(
        <Wrapper>
            <Header />
            <Banner/>
            <Navi />
            <Body>{props.children}</Body>
        </Wrapper>
    )

}