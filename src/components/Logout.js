import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {

    const nav = useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
        setTimeout(()=>{
            alert("Logout Successfull !! \n You will be redirected to login shortly !!")
            nav("/login");
        },4000);
    })

  return (
    <div>
        <h1>Thank you for visiting us !!</h1>
    </div>
  )
}