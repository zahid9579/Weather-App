import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        navigate('/login');
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" {...register('firstname', { required: "First name is required" })} />
                    {errors.firstname && <p className="error">{errors.firstname.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="middlename">Middle Name</label>
                    <input type="text" id="middlename" {...register('middlename', { required: "Middle name is required" })} />
                    {errors.middlename && <p className="error">{errors.middlename.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" {...register('lastname', { required: "Last name is required" })} />
                    {errors.lastname && <p className="error">{errors.lastname.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email', { required: "Email is required" })} />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register('password', { required: "Password is required" })} />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Registering..." : "Register"}
                </button>
                
                <p className="login-link">Already have an account? <Link to="/login">Login here</Link></p>
            </form>
        </div>
    );
};

export default Register;
