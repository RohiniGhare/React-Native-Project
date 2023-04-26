import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useFormik } from 'formik';
import { aptSchema } from '../utils/Apartment-Utils';
import "../styles/apt-details.css"
export default function ApartmentDetails() {
  const [apt, setApt] = useState({});
  // const currentApt = JSON.parse(sessionStorage.getItem("currentApt"));
  useEffect(() => {
    setApt(JSON.parse(sessionStorage.getItem("currentApt")));
    console.log(apt);
  }, []);

  const onHandleApartmentSubmit = () => {
    console.log("current values.....");
    console.log(apt);
  }

  const formik = useFormik({
    initialValues: apt,
    validationSchema: aptSchema,
    onSubmit: onHandleApartmentSubmit
  })

  return (
    <div className='apt-page'>
      <Navbar />
      <h1 className='page-name'>Apartment Details</h1>
      {/* <div>
        <p>{apt.id}</p>
        <p>{apt.aptNumber}</p>
        <p>{apt.aptName}</p>
        <p>{apt.aptAddress}</p>
        <p>{apt.aptCity}</p>
        <p>{apt.aptType}</p>
        <p>{apt.aptRent}</p>
      </div> */}

      <div className='apt-details'>
        <table className="table table-bordered">
          <caption>Details entered while registration</caption>
          <tbody>
            <tr>
              <th scope="row">Id</th>
              <td>{apt.id}</td>
            </tr>
            <tr>
              <th scope="row">Apartment number</th>
              <td>{apt.aptNumber}</td>
            </tr>
            <tr>
              <th scope="row">Apartment name</th>
              <td>{apt.aptName}</td>
            </tr>
            <tr>
              <th scope="row">Apartment address</th>
              <td>{apt.aptAddress}</td>
            </tr>
            <tr>
              <th scope="row">Apartment city</th>
              <td>{apt.aptCity}</td>
            </tr>
            <tr>
              <th scope="row">Apartment type</th>
              <td>{apt.aptType}</td>
            </tr>
            <tr>
              <th scope="row">Apartment rent</th>
              <td>{apt.aptRent}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}