import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { aptSchema, initialAptValues } from '../utils/Apartment-Utils';
import { fetchApartmentById, saveApartment } from '../utils/http-utils';
import Navbar from './Navbar';
import "../styles/apartment.css"
import { useNavigate } from 'react-router-dom';

export default function Apartments() {
  const [apt, setApt] = useState({});
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  let id = currentUser.id;
  let aptValues = {};

  const nav = useNavigate();

  const saveNewApt = (newApt) =>{
    saveApartment(newApt).catch(err =>{
      console.log(err);
    })
  }

  const loadCurrentApt = () => {
    let apt = JSON.parse(sessionStorage.getItem("currentApt"));
    console.log("apt");
    console.log(apt);
    aptValues = apt;
  }


  const onSubmitAptDetails = () => {
    console.log("formik.values");
    console.log(formik.values);
    console.log("currentUser", id);

    let newApt = {
      id: currentUser.id,
      aptNumber: formik.values.aptNumber,
      aptName: formik.values.aptName,
      aptAddress: formik.values.aptAddress,
      aptCity: formik.values.aptCity,
      aptType: formik.values.aptType,
      aptRent: formik.values.aptRent
    }
    console.log("saving new apt");
    console.log(newApt);

    saveNewApt(newApt);
    setTimeout(()=>{
      nav("/dashboard")
    },2000);

  }

  useEffect(() => {
    loadCurrentApt();
  }, []);

  const formik = useFormik({
    // initialValues : apt === null ? initialAptValues : apt,
    initialValues: aptValues,
    validationSchema: aptSchema,
    onSubmit: onSubmitAptDetails
  })

  return (
    <div>
      <Navbar />
      <h1>Apartments Details</h1>
      <div className='card apt-form'>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">id</span>
            <input
              type="number"
              className="form-control"
              aria-label="Apartment Id"
              aria-describedby="basic-addon1"
              value={formik.values.id}
              placeholder="Apartment Id*"
              disabled
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Apartment name*</span>
            <input
              className="form-control"
              aria-describedby="basic-addon2"
              id='aptName'
              name='aptName'
              type='text'
              placeholder='Enter Apartment Name*'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.aptName}
            />

            <span className="input-group-text">Apartment no*</span>
            <input
              className="form-control"
              aria-label="Server"
              id='aptNumber'
              name='aptNumber'
              type='number'
              placeholder='Enter Apartment No*'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.aptNumber}
            />
            <div className="input-group mb-3">
              {
                formik.touched.aptName && formik.errors.aptName ?
                  <p className='error-msg'>{formik.errors.aptName}</p> : null
              }
              {
                formik.touched.aptNumber && formik.errors.aptNumber ?
                  <p className='error-msg'>{formik.errors.aptNumber}</p> : null
              }
            </div>
          </div>

          {/* <label for="basic-url" className="form-label">Apartment address with area details*</label> */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Address*</span>
            <textarea
              className="form-control"
              aria-describedby="basic-addon3"
              id='aptAddress'
              name='aptAddress'
              type='text'
              placeholder='Enter Apartment Address*'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.aptAddress}
            />
            <div className="input-group mb-3">
              {
                formik.touched.aptAddress && formik.errors.aptAddress ?
                  <p className='error-msg'>{formik.errors.aptAddress}</p> : null
              }
            </div>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">City*</span>
            <input
              className="form-control"
              aria-label="Username"
              id='aptCity'
              name='aptCity'
              type='text'
              placeholder='Enter Apartment City*'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.aptCity}
            />

            <span className="input-group-text">Select Type</span>

            <select className="form-select" aria-label="Default select example">
              <option defaultValue="--select apartment type--" >--select apartment type--</option>
              <option value="1-bhk">1-bhk</option>
              <option value="2-bhk">2-bhk</option>
              <option value="3-bhk">3-bhk</option>
              <option value="1-rk">1-rk</option>
            </select>
            <div className="input-group mb-3">
              {
                formik.touched.aptCity && formik.errors.aptCity ?
                  <p className='error-msg'>{formik.errors.aptCity}</p> : null
              }
              {
                formik.touched.aptType && formik.errors.aptType ?
                  <p className='error-msg'>{formik.errors.aptType}</p> : null
              }
            </div>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Rent* $</span>
            <input
              className="form-control"
              id='aptRent'
              name='aptRent'
              type='text'
              placeholder='Enter Apartment Rent*'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.aptRent}
            />
            <span className="input-group-text">.00</span>
            <div className="input-group mb-3">
              {
                formik.touched.aptRent && formik.errors.aptRent ?
                  <p className='error-msg'>{formik.errors.aptRent}</p> : null
              }
            </div>
          </div>
          <button className='btn btn-outline-success' type='submit'>Save</button>
        </form>
      </div>

      {/* <div className='card apt-card'>
              <div className='card-body'>
                <h3 className='apt-label'>Apartment Details</h3>

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
                  </div>
                </form>

              </div>
            </div> */}
    </div>
  )
}