import styled from '@emotion/styled'
import Header from './layout/Header/Header.container'
import Banner from './layout/Banner/Banner.container'
import Navi from './layout/Menu/Menu.container'
import { useRouter } from 'next/router'
import Landing from './layout/Landing_Page/Landing.container'


const Wrapper = styled.div``

const Body = styled.div`
    display: flex;
    justify-content: center;
`
const HIDDEN_WRAPPER = ["/Landing"]

export default function List(props){
    const router = useRouter()
    const isHiddenWrapper = HIDDEN_WRAPPER.includes(router.pathname);

    return(
    <>
        {isHiddenWrapper 
            && <Landing/> 
            || <Wrapper>
                    <Header />
                    <Banner/>
                    <Navi />
                    <Body>{props.children}</Body>
                </Wrapper>
        }
    </>
    )

}