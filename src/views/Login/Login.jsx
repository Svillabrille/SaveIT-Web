import React from "react";
import { useForm } from "react-hook-form";

import './Login.scss'

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => console.log(data);
    
    return (
        <div className="center_login">
            <h1 className="Titles">Login</h1>
            <form onSubmit={handleSubmit(handleRegistration)} >
{/*             <div class="txt_field_login">
                <label>Name</label>
                <input name="name" {...register('name')} />
            </div> */}
                <div className="txt_field_login">
                    <label>Email</label>
                    <span></span>
                    <input type="email" name="email" {...register('email')} />
                </div>
                <div className="txt_field_login">
                    <label>Password</label>
                    <span></span>
                    <input type="password" name="password" {...register('password')} />
                </div>
                <button className="Submit">Submit</button>
                <div className="signup_link_login">
                    Not a member? <a href="#">Signup</a>
                </div>
            </form>
        </div>
        
    );
};
    export default Login;