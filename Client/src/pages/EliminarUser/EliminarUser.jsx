import styles from './EliminarUser.module.css'
import { UserContext } from '../../contexts/UserContext'
import { useContext } from 'react'
import Screamonfirm from '../../components/ScreamConfirm'
import { useNavigate } from 'react-router-dom'

const EliminarUser  = ()=>{
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)

    const eliminar = async()=>{
        if(!user) return <Screamonfirm/>
        const confi = confirm('Aceptar para continuar la ejecucion')
        if(!confi)return;
        try {
            const res = await fetch(`http://localhost:3000/users/${user.id}`,{
                method:'DELETE',
            })
            if(!res.ok) throw new Error('no se consigui eliminar su usuario')
            setUser(null)
            alert('Se elimino su usuario')
            navigate('/home')
        } catch (error) {
            alert(error.message)
        }
    }



    return(
        <div className={styles.container}>
            <p className={styles.p}>Seguro que desea ELIMINAR su usuario? esta ACCION es IRREVERSIBLE, desea continuar?</p>
            <div className={styles.butosss}>
            <button className={styles.buttoneliminar}  onClick={eliminar}>SI, quiero ELIMINAR mi usuario</button>
            <button className={styles.button} onClick={()=>{navigate('/home')}}>NO, deseo seguir teniendo mi usuario</button>
            </div>
            
        </div>
    )
}
export default EliminarUser 