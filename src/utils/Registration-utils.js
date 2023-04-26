import * as Yup from 'yup';

export const initialRegValues={
    id: Math.random(),
    ownerEmail: '',
    ownerPassword: '',
    ownerConPassword: '',
    ownerName: '',
    ownerContact: ''
}

export const registerSchema = Yup.object({
    ownerName: Yup.string().max(20, "Must be 20 characters or less").required("Name is mandatory !!"),
    ownerContact: Yup.string().max(10, "Contact number must be of 10 digits !!").min(10, "Contact number is not valid !!").required("Contact number is mandatory !!"),
    ownerEmail: Yup.string().email("Invalid Email address !!").required("Email is required"),
    ownerPassword: Yup.string().min(4,"Password should be at leat 4 characters !!").required("Password is mandatory !!"),
    ownerConPassword: Yup.string().min(4,"Password should be at leat 4 characters !!").required("Password is mandatory !!")
})
