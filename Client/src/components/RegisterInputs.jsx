import { validateRegistro } from '../helpers/validate';
import styles from './styles/RegisterInputs.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const RegisterInputs = () => {
    const [userData, setUserData] = useState({
        name:'',
        email:'',
        address:'',
        birthdate:'',
        username:'',
        password:'',
    })
    const [errors, setErrors] = useState({
        name:'',
        email:'',
        address:'',
        birthdate:'',
        username:'',
        password:'',
    })


    const handleOnChange = (event)=>{
        const {name,value } = event.target;
        setUserData({
            ...userData,
            [name]:value
        })
        setErrors(validateRegistro(userData))
    }

    const handleOnSubmit = (event)=>{
        event.preventDefault()
        alert(`${userData.username} ${userData.password}`)
    }

    return(
        <div className={styles.container}>
        <h2>REGISTER</h2>
        <form onSubmit={handleOnSubmit}>
        <div className={styles.inputs}>

            <div className={styles.colums}>
                
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
                <br />
            <label>
                Password:
            </label>
                <input
                    type="password"
                    value={userData.password}
                    name='password'
                    onChange={handleOnChange}
                    placeholder='******'
                    />
                {errors.password && <p>{errors.password}</p>}
                <br />
            <label>
                Your name:
            </label>
                <input
                    type="text"
                    value={userData.name}
                    name='name'
                    onChange={handleOnChange}
                    
                    />
                {errors.name && <p>{errors.name}</p>}
        </div>

        <div className={styles.colums}>

            <label>
                Your email:
            </label>
                <input
                    type="email"
                    value={userData.email}
                    name='email'
                    onChange={handleOnChange}
                    placeholder='exaple@email.com'
                    />
                {errors.email && <p>{errors.email}</p>}
                <br />
            <label>
                Your birthdate:
            </label>
                <input
                    type="date"
                    value={userData.birthdate}
                    name='birthdate'
                    onChange={handleOnChange}
                    placeholder='dd/mm/aaaa'
                    
                    />
                {errors.birthdate && <p>{errors.birthdate}</p>}
                <br />
            <label>
                Your address:
            </label>
                <input
                    type="text"
                    value={userData.address}
                    name='address'
                    onChange={handleOnChange}
                    
                    />
                {errors.address && <p>{errors.address}</p>}
        </div>
    </div>
        <div id={styles.buttons}>
            <button className={styles.submit} disabled={(!userData.username || !userData.password || !userData.birthdate || !userData.email|| !userData.name|| !userData.address)}>Registrarse</button>
            <Link to='/'><button className={styles.registrarse}>Loging</button></Link>
        </div>
        </form>
    </div>
)
}
export default RegisterInputs