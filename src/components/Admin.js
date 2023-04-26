import React, { useEffect, useState } from 'react'
import { fetchApartments, fetchOwners } from '../utils/http-utils';
import Navbar from './Navbar';
import "../styles/admin.css";

export default function Admin() {
    const [owners, setOwners] = useState([]);
    const [apts, setApts] = useState([]);

    const loadOwners = () => {
        fetchOwners().then(res => {
            setOwners(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
    const loadApartments = () => {
        fetchApartments().then(res => {
            setApts(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        loadOwners();
        loadApartments();
    }, [])

    return (
        <div className='admin-page'>
            <Navbar />
            <div className='data-details'>
                <h1 className='page-name'>Owners Data</h1>
                <table className="table table-bordered">
                    <caption>Owners details.....</caption>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Owner Name</th>
                            <th scope="col">Email address</th>
                            <th scope="col">Contact no</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            owners.map(data => {
                                return <tr>
                                        <td>{data.id}</td>
                                        <td>{data.ownerName}</td>
                                        <td>{data.ownerEmail}</td>
                                        <td>{data.ownerContact}</td>
                                       </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className='data-details'>
            <h1 className='page-name'>Apartments Data</h1>
                <table className="table table-bordered">
                    <caption>Apartment details.....</caption>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Apartment no</th>
                            <th scope="col">Apartment name</th>
                            <th scope="col">Address</th>
                            <th scope="col">City</th>
                            <th scope="col">Type</th>
                            <th scope="col">Rent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apts.map(data => {
                                return <tr>
                                        <td>{data.id}</td>
                                        <td>{data.aptNumber}</td>
                                        <td>{data.aptName}</td>
                                        <td>{data.aptAddress}</td>
                                        <td>{data.aptCity}</td>
                                        <td>{data.aptType}</td>
                                        <td>{data.aptRent}</td>
                                       </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}