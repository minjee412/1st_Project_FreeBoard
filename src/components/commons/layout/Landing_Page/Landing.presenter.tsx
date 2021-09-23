import { Landing_Wrapper, Enter, Button_Wrapper } from './Landing.styles'

export default function LandingUI(props){
    return(
        <Landing_Wrapper>
            <Button_Wrapper >
                <Enter onClick={props.onClickBtn}> Into The Unknown...✈️ </Enter>
            </Button_Wrapper>

        </Landing_Wrapper>
    )
}