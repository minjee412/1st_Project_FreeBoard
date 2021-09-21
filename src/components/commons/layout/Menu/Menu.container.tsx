import { useRouter } from 'next/router'
import NaviUI from './Menu.presenter'

export default function Navi(){
    const router = useRouter()

    function onClickBoard(){
        router.push("/boards");
    }
    return(
        <NaviUI 
        onClickBoard={onClickBoard}
        
        />
    )
}