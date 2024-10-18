import { Navigate } from "react-router-dom"
import LoginInputs  from "../components/LoginInputs"
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"

const Logearse = () =>{
    const {user} = useContext(UserContext)

    if (!user)return <LoginInputs/> 
    if (user)return Navigate('/home')
    
        

}
export default Logearse