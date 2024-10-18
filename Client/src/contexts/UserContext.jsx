import { createContext, useState } from "react";
import { useNavigate  } from 'react-router-dom';


export const UserContext = createContext({
    user: null,
    where:'/',
    GetUser:()=>{},
    
});

// eslint-disable-next-line react/prop-types
export const UserProvider = ({children})=>{
    const [user, setUser]= useState()
    const navigate = useNavigate()
    const [where,setWhere]= useState()
    

    const GetUser = async ({username , password})=>{
        try {
            const response = await fetch(`http://localhost:3000/users/`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username , password}), 
            })
            if(!response.ok){
                alert(`ERROR: ${response.status} ${response.statusText}`)
                throw new Error(`ERROR: ${response.status} ${response.statusText}`)
            }
                const usuario = await response.json()
            setUser(usuario)
            navigate('/home')
            setWhere('/home')   
            return 
        } catch (error) {
            alert(error.message)
        }
    }
    
    const value ={
        user,
        GetUser,
        where,
        setWhere

    }
  
    
    return (
       <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )

}









