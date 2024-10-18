import { TurnsContext } from '../contexts/TurnsContext'
import styles from './styles/Turn.module.css'
import {useContext, useState} from 'react'
import { UserContext } from '../contexts/UserContext'

// eslint-disable-next-line react/prop-types
export const Turn = ({turn})=>{
    // eslint-disable-next-line react/prop-types
    let {status, type, date, id} = turn
    const {setTurns, turns} = useContext(TurnsContext)
    const {user}= useContext(UserContext)
    
    const [estado, setEstado] = useState(status)

        if(estado){ status = 'Pending'}
        else{ status = 'Cancel' }

        const cancelTurn= async(id)=>{
            console.log({status:false});
            
            if (!user) throw new Error("Usuario no logeado");
            try {
                const URL = 'http://localhost:3000/turns/'+ id
                console.log(URL);
                
                const res =  await fetch(URL,{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id}), 
                })
                if(!res.ok){throw new Error("No se pudo crear su turno ")}
                setTurns(...turns)
                return;
            } catch (error) {
                alert(error.message)
            }
            
        }
    
    const handleCancelOnClick = ()=>{
        if(setEstado !== true){
            console.log(id)
            const confirmacion = confirm('esta ACCION es IRREVERSIBLE, seguro que desea CANCELAR su turno?') 
            if(confirmacion){
                setEstado(false)
                cancelTurn(id)
            }
            return;
        }
        return;
    }
    
    return (
        <div className={styles.Turn}>
        <div className={styles.type}>{type}</div>
        <div className={styles.date}>{date}</div>
        <div className={styles[`${status}`]}>{status}</div>
        <button className={styles[`buttonCancel${status}`]} disabled={!estado} onClick={()=> handleCancelOnClick()}>Cancelar</button>
        </div>
       
    
    )
}