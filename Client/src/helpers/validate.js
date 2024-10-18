

const validate = (userData)=>{
    const errors ={
        username:'',
        password:'',
    }
    if(!userData.username){errors.username = 'UserName ir required'}
    if(!userData.password){errors.password = 'Password ir required'}
    
    const noCaracteresEspeciales = /^(?:[a-zA-Z0-9]+)?$/;
    
    if(!noCaracteresEspeciales.test(userData.username)){errors.username = 'No se permiten caracteres especiales'}
    if(!noCaracteresEspeciales.test(userData.password)){errors.password = 'No se permiten caracteres especiales'}


    return errors
}

const validateRegistro = (userData)=>{
    const errors ={
        name:'',
        email:'',
        address:'',
        birthdate:'',
        username:'',
        password:'',
    }
   
    if(userData.email.length >7){
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
        errors.email = 'Email Invalido.';
    }
    }

    if(userData.address.length >2){
        if (!/^[a-zA-Z0-9\s]+$/.test(userData.address)) {
            errors.address = 'No se permiten Carcteristicas especiales';
        }
    }


    return errors;
};



export {validate, validateRegistro}