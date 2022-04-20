import React from "react";
import { useForm } from "react-hook-form";

import './Register.scss'

const Register = () => {
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => console.log(data);
    
    return (
        <div className="center">
            <h1 className="Titles">Register</h1>
            <form onSubmit={handleSubmit(handleRegistration)} >
{/*             <div className="txt_field">
                <label>Name</label>
                <input name="name" {...register('name')} />
            </div> */}
                <div className="txt_field">
                    <label>Email</label>
                    <span></span>
                    <input type="email" name="email" {...register('email')} />
                </div>
                <div className="txt_field">
                    <label>Password</label>
                    <span></span>
                    <input type="password" name="password" {...register('password')} />
                </div>
                <button className="Submit">Submit</button>
            </form>
        </div>
        
    );
};
    export default Register;