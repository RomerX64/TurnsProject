import Screamonfirm from '../../components/ScreamConfirm';
import { UserContext } from '../../contexts/UserContext';
import { useState, useContext } from 'react';
import styles from'./NewTurn.module.css'
import { TurnsContext } from '../../contexts/TurnsContext';


const NewTurns =()=>{
    const{setTurns} = useContext(TurnsContext)
    const {user} = useContext(UserContext)
    const [data, setData]= useState({
        type:'',
        date:'',
    })
    const MakenewTurn= async ({type, date})=>{
        if (!user) throw new Error("Usuario no logeado");
        try {
            const userId = user.id
            const res = await fetch('http://localhost:3000/turns/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({type, date, userId}), 
            })
            if(!res.ok){throw new Error("No se pudo crear su turno")}
            const newTurn = await res.json()
            setTurns((prevTurns) => [...prevTurns, newTurn]);   
            return alert(`Se creo correctamente su turno de ${newTurn.type} para el ${newTurn.date}, ${user.name} `)
        } catch (error) {
            alert(error.message)
        }
    }

    if(!user){
        return <Screamonfirm/>
    }

    const handleOnChange = (event)=>{
        const {name, value } = event.target;
        setData({
            ...data,
            [name]:value
        })
    }
    const handleOnSubmit = (event)=>{
        event.preventDefault()
        MakenewTurn(data)
        return;
    }


    return (
        <form className={styles.newTurns} onSubmit={handleOnSubmit}>
            <input type="text"className={styles.type} placeholder='Type' name='type' onChange={handleOnChange}/>
            <input type="date" className={styles.date} name='date'onChange={handleOnChange}/>
            <button type='submit' className={styles.submiti} disabled={(!data.type || !data.date)}>Agregar</button>
        </form>
    )
}









export default NewTurns