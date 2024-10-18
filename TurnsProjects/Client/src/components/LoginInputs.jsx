import styles from './styles/LoginInputs.module.css'
import { useState, useContext } from 'react';
import {validate} from '../helpers/validate';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';


const LoginInputs = () => {

    const {where, setWhere, user, GetUser} = useContext(UserContext)
    
    
    if(user){Navigate('/home')}
    where? null : setWhere('/')
    
    const [userData, setUserData] = useState({
        username:'',
        password:''
    })
    const [errors, setErrors] = useState({
        username:'',
        password:'',
        
    })
    

    const handleOnChange = (event)=>{
        const {name,value } = event.target;
        setUserData({
            ...userData,
            [name]:value
        })
        setErrors(validate(userData))
    }

    const handleOnSubmit = (event)=>{
        event.preventDefault()
        GetUser(userData)
    }

    return(
        <div className={styles.container}>
        <h2>LOGIN</h2>
        <form onSubmit={handleOnSubmit}>
            <label>
                Username:
            </label>
                <input
                    type="text"
                    value={userData.username}
                    name='username'
                    onChange={handleOnChange}
                />
                {errors.username &&<p>{errors.username}</p>}
            <label>
                Password:
            </label>
                <input
                    type="password"
                    value={userData.password}
                    name='password'
                    onChange={handleOnChange}
                />
                {errors.password && <p>{errors.password}</p>}
                
            <button className={styles.submit} disabled={(!userData.username || !userData.password)}>Submit</button>
            <Link to='/register'><button className={styles.registrarse}>Registrarse</button></Link>
        </form>
    </div>
);
}

export default LoginInputs