import React, { useEffect, useState } from 'react'
import { fetchOwners } from '../utils/http-utils';
import { useFormik } from 'formik';
import { initialLoginValues, loginSchema } from '../utils/Login-Utils';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/login.css";
import background from "../styles/apartment-1.jpg";

export default function Login() {

    const [owners, setOwners] = useState([]);
    const nav = useNavigate();

    const loadOwners = () => {
        fetchOwners().then(res => {
            setOwners(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        loadOwners();
    }, []);

    const checkOwner = () => {
        owners.map(val => {
            if (val.ownerEmail === formik.values.emailId) {
                if (val.ownerPassword === formik.values.password) {
                    console.log("found...........");
                    sessionStorage.setItem("currentUser", JSON.stringify(val));
                    console.log(val);
                    setTimeout(() => {
                        nav("/dashboard");
                    }, 2000);
                    return true;
                } else {
                    console.log("not found...........")
                    return false;
                }
            } else {
                console.log("not found...........")
                return false;
            }
        })
    }

    const onHandleSubmit = () => {
        console.log(formik.values);
        checkOwner();
    }

    const formik = useFormik({
        initialValues: initialLoginValues,
        validationSchema: loginSchema,
        onSubmit: onHandleSubmit
    })

    return (
        <div>

            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className='card login-card'>
                            <div className='card-body'>
                                <h3 className='login-label'>Login here</h3>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="input-feild-login form-floating">
                                        <input
                                            type='email'
                                            name='emailId'
                                            id='emailId'
                                            className="form-control"
                                            placeholder='Enter Email'
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            value={formik.values.emailId}
                                            required
                                        />
                                        <label htmlFor="emailId">Email address</label>
                                        {formik.touched.emailId && formik.errors.emailId ? <p className='login-error'>{formik.errors.emailId}</p> : null}
                                    </div>
                                    <div className="input-feild-login form-floating">
                                        <input
                                            type='password'
                                            name='password'
                                            id='password'
                                            className="form-control"
                                            placeholder='Enter Password'
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                            required
                                        />
                                        <label htmlFor="floatingPassword">Password</label>
                                        {formik.touched.password && formik.errors.password ? <p className='login-error'>{formik.errors.password}</p> : null}
                                    </div>
                                    <div className="button-feild-login inform-floating">
                                        <button className="form-control btn btn-outline-success" type='submit'>Login</button>
                                        <h4 className='reg-link'>New user? <Link to="/register">Register here!</Link></h4>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col img-col">
                        <img src={background} alt="this is car image" />
                    </div>
                </div>
            </div>


        </div>
    )
}