import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Loading from "../../components/Loading/Loading";
import { register as registerRequest } from '../../services/AuthService'


import './Register.scss'

const schema = yup.object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().min(8, 'Password must contain at least 8 characters').required()
  }).required();

const Register = () => {
    const [backErrors, setBackErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
    });

  
    const onSubmit = data => {
      setBackErrors({})
      setIsSubmitting(true)
  
      registerRequest(data)
        .then((user) => {
          navigate('/login')
        })
        .catch(err => {
          setBackErrors(err?.response?.data?.errors)
        })
        .finally(() => {
          setIsSubmitting(false)
        })
    };    
    return (
      <>
        { isSubmitting ? (<Loading></Loading>) :
          <div className="center">
            <h1 className="Titles">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
             <div className="txt_field">
                <input placeholder='Name'name="name" {...register('name')} />
                {errors.name && <small className='RegisterErrors'>{errors.name?.message}</small>}
            </div> 
                <div className="txt_field">
                    <span></span>
                    <input placeholder='Email' type="email" name="email" {...register('email')}/>
                    {errors.email && <small className='RegisterErrors'>{errors.email?.message}</small>}
                </div>
                <div className="txt_field">
                    <span></span> 
                    <input placeholder='Password' type="password" name="password" {...register('password')} />
                    {errors.password && <small className='RegisterErrors'>{errors.password?.message}</small>}
                </div>
                <div className="txt_field">
                    <span></span> 
                    <input placeholder='Country' type="text" name="country" {...register('country')} />
                </div>
                <div className="txt_field">
                  <select {...register('supermarketPreferences')} multiple>
                      <option>
                        Dia
                      </option>
                      <option>
                        Mercadona
                      </option>
                      <option>
                        Carrefour
                      </option>
                      <option>
                        Lidl
                      </option>
                      <option>
                        Supeco
                      </option>
                      <option>
                        AhorraMas
                      </option>
                      <option>
                        Hipercor
                      </option>
                    
                  </select>
                </div>
                <button className="Submit">Register</button>
            </form>
        </div>
        }
      </>
        
        
    );
};
    export default Register;