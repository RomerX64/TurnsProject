import { Turn } from '../../components/Turns';
import { UserContext } from '../../contexts/UserContext';
import styles from './MyTurnsBoard.module.css';
import { useEffect, useState,useContext, useCallback } from 'react';
import Screamonfirm from '../../components/ScreamConfirm';
import {TurnsContext} from '../../contexts/TurnsContext'

const MyTurnsBoard = () => {
    const [loading, setLoading] = useState(true);
    const {user} = useContext(UserContext)
    const {setTurns, turns} = useContext(TurnsContext)
    const [MyTurns, setMyTurns] = useState(turns)
    const userId = user?.id


    const getTurns= useCallback(async () => {
        try {
            const url = 'http://localhost:3000/turns/'+ userId
        
            const res = await fetch(url)
            if(!res.ok){throw new Error("No se pudieron obtener sus turnos");}
            const theTurns = await res.json()
            setTurns(theTurns)
            setMyTurns(theTurns)

        } catch (error) {
            alert(error.message)
        }
        finally{
            setLoading(false)
        }
    }, [setTurns, userId])

        useEffect(()=>{
            if(userId){
                getTurns()
            }
        },[getTurns, userId])

    if(!user){return <Screamonfirm/>}

    if (loading) return <div>Cargando Turnos ...</div>;
    
    const PendingCancel = (arr)=>{
        const orders = []

        arr.forEach((turn)=> {turn.status ? orders.unshift(turn) : orders.push(turn)})
        return orders
    }
    const TurnsOrders = PendingCancel(MyTurns)
    return (
        <div className={styles.Board}>
            {TurnsOrders.map((turn) => (
                <Turn key={turn.id} turn={turn} />
            ))}
        </div>
    );
};
export default MyTurnsBoard