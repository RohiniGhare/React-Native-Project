import * as Yup from 'yup';


export const initialLoginValues={
    emailId: '',
    password:''
}

export const loginSchema = Yup.object({
    emailId: Yup.string().email("Invalid Email address !!").required("Email is required"),
    password: Yup.string().min(4,"Password should be at leat 4 characters !!").required("Password is mandatory !!"),
})