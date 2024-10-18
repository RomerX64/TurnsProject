import { Link } from "react-router-dom";
import styles from './styles/ScreamConfirm.module.css'
import { useContext } from "react";
import {UserContext} from '../contexts/UserContext'

const Screamonfirm = () =>{
    const {setWhere} = useContext(UserContext)
    setWhere('/')
    const a ={
        description: "Para poder continuar es necesario que se encuentre logeado", 
        confirm: 'Deseo Logearme', 
        linkConfrim:"/",
        cancel:'No deseo logearme',
        linkCancel:'/home'
    }

    const handlelink = (link) => {
        return setWhere(link)
    }



    return(
        <div className={styles.container}>
            <p className={styles.p}>{a.description}</p>
            <div className={styles.butosss}>
            <Link to={a.linkConfrim}>
            <button className={styles.button} onClick={()=>{handlelink(a.linkConfrim)}}>{a.confirm}</button>
            </Link>
            <Link to={a.linkCancel}>
            <button className={styles.button} onClick={()=>{handlelink(a.linkCancel)}}>{a.cancel}</button>
            </Link>
            </div>
            
        </div>
    )
}

export default Screamonfirm 