import React, { useEffect, useState } from 'react'
import { initialAptValues } from '../utils/Apartment-Utils';
import { fetchApartmentById, fetchOwnerById } from '../utils/http-utils';
import ApartmentDetails from './ApartmentDetails';
import Navbar from './Navbar';
import "../styles/dashboard.css"
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const [owner, setOwner] = useState({});
    // const [apt, setApt] = useState({});
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    let id = currentUser.id;

    const loadCurrentOwner = () => {
        fetchOwnerById(id).then(res => {
            console.log("owner res.......\n" + res);
            setOwner(res.data);
            console.log(owner);
        }).catch(err => {
            console.log(err);
        })
    }
    const loadCurrentApt = () => {
        fetchApartmentById(id).then(res => {
            console.log("res.......\n" + res);
            // setApt(res.data);
            sessionStorage.setItem("currentApt", JSON.stringify(res.data));
        }).catch(err => {
            console.log(err);
            sessionStorage.setItem("currentApt", JSON.stringify(initialAptValues));
            // alert("apartment not found!!");
            //add apartment not found code here
        })
    }

    useEffect(() => {
        loadCurrentOwner();
        // <ApartmentDetails/>
        loadCurrentApt();
    }, []);

    return (
        <div className='dashboard-page'>
            <Navbar />
            <h1 className='page-name'>Owners Details</h1>
            {/* <div>
                <p>{owner.id}</p>
                <p>{owner.ownerName}</p>
                <p>{owner.ownerEmail}</p>
                <p>{owner.ownerContact}</p>
            </div> */}

            <div className='owner-details'>
                <table className="table table-bordered">
                    <caption>Details entered while registration</caption>
                    <tbody>
                        <tr>
                            <th scope="row">Id</th>
                            <td>{owner.id}</td>
                        </tr>
                        <tr>
                            <th scope="row">Name</th>
                            <td>{owner.ownerName}
                                {/* <input
                                  type='text'
                                  placeholder={owner.ownerName}
                                  className='owner-data'
                                  value={owner.ownerName}
                                /> */}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Email address</th>
                            <td colSpan="2">{owner.ownerEmail}</td>
                        </tr>
                        <tr>
                            <th scope="row">Contact no</th>
                            <td colSpan="2">{owner.ownerContact}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <button className='btn btn-outline-danger'><Link className="addApt-link" to="/addApartment">+Apartment</Link></button>
        </div>
    )
}