import { InnerButton, InnerLogo, InnerWrapper, Wrapper } from './Header.styles'

export default function HeaderUI(props){

    return(
        <>
            <Wrapper>
                <InnerWrapper>
                    <InnerLogo onClick={props.onClicklogo}></InnerLogo>
                    <div>
                    <InnerButton src="/header/logo/회원가입.png"></InnerButton>
                    <InnerButton src="/header/logo/login.png"></InnerButton>
                    </div>
                </InnerWrapper>
            </Wrapper>
        </>
    )
}