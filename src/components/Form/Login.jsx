import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="login-container">
            <h2>Login Page</h2>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Email address..." 
                        {...register("email", { required: "Email is required" })} 
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Password..." 
                        {...register("password", { required: "Password is required" })} 
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                <button className="submit-btn" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Loading..." : "Login"}
                </button>
                
                <p className="register-link">
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
