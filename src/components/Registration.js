import React, { useState } from 'react';
import { useFormik } from 'formik';
// import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
// import "./Registration.css";
import { initialRegValues, registerSchema } from '../utils/Registration-utils';
import { saveOwner } from '../utils/http-utils';
import background from "../styles/background.jpg";
import "../styles/registration.css";

export default function Registration() {
  // const [newUser, setNewUser] = useState({});

  const saveNewUser = (newUser) => {
    saveOwner(newUser).catch(err => {
      console.log(err);
    })
  }

  const nav = useNavigate();

  // const checkPassword = () => {
  //   if (formik.values.ownerPassword === formik.values.ownerConPassword) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  const submitRegForm = (e) => {
    console.log(formik.values);
    let newUser = {
      ownerName: formik.values.ownerName,
      ownerContact: formik.values.ownerContact,
      ownerEmail: formik.values.ownerEmail,
      ownerPassword: formik.values.ownerPassword,
    }
    console.log("saving new user");
    if (formik.values.ownerPassword === formik.values.ownerConPassword) {
      saveNewUser(newUser);
      setTimeout(() => {
        nav("/login");
        // formik.resetForm();
      }, 2000);
    } else {
      alert("Passwords do not match !!")
    }
  }

  const formik = useFormik({
    initialValues: initialRegValues,
    validationSchema: registerSchema,
    onSubmit: submitRegForm
  })

  return (
    <div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className='card reg-card'>
              <div className='card-body'>
                <h3 className='reg-label'>Register here</h3>

                <form onSubmit={formik.handleSubmit}>
                  <div className="input-feild form-floating">
                    <input
                      id="ownerName"
                      name='ownerName'
                      type='text'
                      placeholder='Enter Name'
                      className="form-control"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.ownerName}
                    />
                    <label htmlFor="ownerName">Enter Name</label>
                    {formik.touched.ownerName && formik.errors.ownerName ? <p className='reg-error'>{formik.errors.ownerName}</p> : null}
                  </div>
                  <div className="input-feild form-floating">
                    <input
                      id="ownerEmail"
                      name='ownerEmail'
                      type='email'
                      placeholder='Enter Email'
                      className="form-control"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.ownerEmail}
                    />
                    <label htmlFor="ownerEmail">Enter Email address</label>
                    {formik.touched.ownerEmail && formik.errors.ownerEmail ? <p className='reg-error'>{formik.errors.ownerEmail}</p> : null}
                  </div>
                  <div className="input-feild form-floating">
                    <input
                      id="ownerPassword"
                      name='ownerPassword'
                      type='password'
                      placeholder='Enter Password'
                      className="form-control"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.ownerPassword}
                    />
                    <label htmlFor="ownerPassword">Enter Password</label>
                    {formik.touched.ownerPassword && formik.errors.ownerPassword ? <p className='reg-error'>{formik.errors.ownerPassword}</p> : null}
                  </div>
                  <div className="input-feild form-floating">
                    <input
                      id="ownerConPassword"
                      name='ownerConPassword'
                      type='password'
                      placeholder='Confirm Password'
                      className="form-control"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.ownerConPassword}
                    />
                    <label htmlFor="ownerConPassword">Confirm Password</label>
                    {formik.touched.ownerConPassword && formik.errors.ownerConPassword ? <p className='reg-error'>{formik.errors.ownerConPassword}</p> : null}
                  </div>
                  <div className="input-feild form-floating">
                    <input
                      id="ownerContact"
                      name='ownerContact'
                      type='number'
                      placeholder='Enter Contact number'
                      className="form-control"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.ownerContact}
                    />
                    <label htmlFor="ownerContact">Enter Contact no</label>
                    {formik.touched.ownerContact && formik.errors.ownerContact ? <p className='reg-error'>{formik.errors.ownerContact}</p> : null}
                  </div>
                  <div className="button-feild inform-floating">
                    <button className="form-control btn btn-outline-success" type='submit'>Submit</button>
                    <h4 className='login-link'>Already have an account? <Link to="/">Sign in here!</Link></h4>
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

