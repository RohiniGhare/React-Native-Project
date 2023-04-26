import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
    let data = JSON.parse(sessionStorage.getItem("currentApt"));

    if(data.id > 0){
        console.log("In protected route");
        console.log("current data.id is");
        console.log(data.id);
        return props.children;
    }else{
        alert("Add apartment details first !!");
        return <Navigate to="/dashboard" replace />
    }
//   return (
//     <div>ProtectedRoute</div>
//   )
}
