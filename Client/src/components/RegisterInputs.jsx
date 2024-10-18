import { UserContext } from '../contexts/UserContext';
import { validateRegistro } from '../helpers/validate';
import styles from './styles/RegisterInputs.module.css';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const RegisterInputs = () => {
    const {setUser, setWhere} = useContext(UserContext)
    setWhere('/')
    const navigate = useNavigate()
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
    const MakeUser = async({name, email, address, birthdate, username, password})=>{
        console.log({name, email, address, birthdate, username, password});
        
        try {
            const res = await fetch('http://localhost:3000/users/new',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, email, address, birthdate, username, password}),
            })
            if(!res.ok)throw new Error('No se pudo crear el usuario')
                console.log(res);
                
            const NewUser = await res.json()
            setUser(NewUser)
            setWhere('/home')
            navigate('/home')
            return alert('Se pudo crear su usuario')
            } catch (error) {                
            alert(error.message)
        }
    }
    


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
        MakeUser(userData)
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
                    type="text"
                    value={userData.birthdate}
                    name='birthdate'
                    onChange={handleOnChange}
                    placeholder='dd-mm-aaaa'
                    
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