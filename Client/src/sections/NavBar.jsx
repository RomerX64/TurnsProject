import styles from './styles/navbar.module.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';

const NavBar = () =>{
    const {user} = useContext(UserContext)
    let disable = false
    if(!user){ disable = true}
    
    return (
       <div className={styles.conteiner}>
        <img src="https://cdn-icons-png.flaticon.com/512/2654/2654520.png" className={styles.img}/>
        <div className={styles.contenedorPrincipal}>
            <div className={styles.contenedorTitulo}>
            <Link to='/home'>
            <button className={styles.Home}>Gestor de turnos</button>
            </Link>
            </div>
            <div className={styles.contenedorRuters}>
            <Link to='/turns' className={styles.RutersLinks}>
            <button className={styles.Ruters}>Mis Turnos</button>
            </Link>
            <Link to='/newTurn'className={styles.RutersLinks}>
            <button className={styles.Ruters}>Nuevo Turno</button>
            </Link>
            <Link to='/abautUs' className={styles.RutersLinks}>
            <button className={styles.Ruters}>Abaut us</button>
            </Link>
            </div>
        </div>
        <div className={styles.MyAccuntContainer}>
            <img src="https://cdn-icons-png.flaticon.com/512/3736/3736502.png" alt="" className={styles.MyAccunt} style={{opacity: disable? 0.4 : 1, cursor: disable? 'not-allowed' : 'pointer'}}/>
        </div>
       </div>
    )
}   
export default NavBar;
