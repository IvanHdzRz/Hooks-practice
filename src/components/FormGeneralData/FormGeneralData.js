import React, { useEffect } from 'react'
import useForm from '../../Hooks/useForm';
import Styles from './FormGeneralData.module.css'

const FormGeneralData = () => {
    
    const {formData,handleChange,setformData}=useForm({
        email:'',
        password:'',
        password2:'',
        passMatched:false
    })

    const {email,password,password2,passMatched}=formData
    
    
    useEffect(() => {
        console.log('me ejecute alv')
        setformData((prevState)=>({...prevState,passMatched:password===password2}))
    }, [password2,password,setformData])
    
    return (
        <form className={Styles.GeneralData}> 
            <h2>Bienvenido</h2>
            <div className='form-group'>
                <label  htmlFor='txtEmail'>
                    Ingrese su correo
                </label>
                <input 
                    name='email'
                    id='txtEmail'
                    type='email' 
                    className='form-control'
                    value={email}
                    onChange={(e)=>{
                        handleChange(e)
                    }}
                />
            </div>
            <div className='form-group'>
                <label  htmlFor='txtPassword'>
                    Ingrese su contraseña
                </label>
                <input 
                    name='password'
                    id='txtPassword'
                    type='password' 
                    className='form-control'
                    value={password}
                    onChange={(e)=>{
                        handleChange(e)
                    }}
                />
            </div>
            <div className='form-group'>
                <label  htmlFor='txtPassword2'>
                    confirme su contraseña
                </label>
                <input 
                    name='password2'
                    id='txtPassword2'
                    type='password' 
                    className='form-control'
                    value={password2}
                    onChange={(e)=>{
                        handleChange(e)
                    }}
                />
            </div>
            <input 
                type='submit'
                className='btn btn-primary'
                value='ingresar'
            />
            {(!passMatched)&&<p>no coinciden</p>}    
        </form>
    )
}

export default FormGeneralData
