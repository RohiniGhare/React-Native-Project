
import axios from "axios";

const aptUrl="http://localhost:4000/apartments";
const ownerUrl="http://localhost:4000/owners";

// let id = 1;   //will come from sessionStorage

const fetchOwners = () =>{
    return axios.get(ownerUrl);
}

const fetchApartments= ()=>{
    return axios.get(aptUrl);
}

const fetchOwnerById= (id) =>{
    return axios.get(ownerUrl+"/"+id);
}

const fetchApartmentById= (idOfCurrentOwner) =>{
    return axios.get(aptUrl+"/"+idOfCurrentOwner);
}

const saveOwner = (owner) =>{
    return axios.post(ownerUrl,owner);
}

const saveApartment = (apt) =>{
    return axios.post(aptUrl, apt);
}

export {fetchOwners, fetchApartments, fetchApartmentById, fetchOwnerById, saveOwner, saveApartment}
