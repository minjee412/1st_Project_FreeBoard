import router from 'next/router'
import HeaderUI from './Header.presenter'

export default function Header(){
    function onClicklogo(){
        router.push("/boards")
    }

    return(
        <HeaderUI 
        onClicklogo={onClicklogo}
        
        />
    )
}