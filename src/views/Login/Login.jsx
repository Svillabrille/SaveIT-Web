import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from 'react' 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useLocation, useNavigate } from 'react-router-dom'
import { login as loginRequest } from '../../services/AuthService';
import { useAuthContext } from '../../contexts/AuthContext';

import './Login.scss'

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  }).required();

const Login = () => {
    const navigate = useNavigate()
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/home";
    const { login } = useAuthContext()
  
    const [error, setError] = useState()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
    });
  
    const onSubmit = (data) => {
      setError(undefined)
      setIsSubmitting(true)
  
      loginRequest(data)
        .then(response => {
          console.log(response);
  
          login(response.access_token, () => navigate(from, { replace: true }))
        })
        .catch(err => {
          setError(err?.response?.data?.message)
        })
        .finally(() => setIsSubmitting(false))
    }
    
    return (
        <div className="center_login">
            <h1 className="Titles">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="txt_field_login">
                    <span></span>
                    <input placeholder="Email" type="email" name="email" {...register('email')} />
                </div>
                <div className="txt_field_login">
                    <span></span>
                    <input placeholder="Password" type="password" name="password" {...register('password')} />
                </div>
                <button className="Submit">Submit</button>
                <div className="signup_link_login">
                    Not a member? <Link to="/register">Signup</Link>
                </div>
            </form>
        </div>
        
    );
};
    export default Login;