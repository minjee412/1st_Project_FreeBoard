import router from 'next/router'
import LandingUI from './Landing.presenter'

export default function Landing(){

    function onClickBtn(){
        router.push('/boards')
    }
    return(
        <LandingUI 
        onClickBtn={onClickBtn}
        />
    )
}