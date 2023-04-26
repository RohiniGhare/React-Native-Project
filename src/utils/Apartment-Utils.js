import * as Yup from 'yup';

export const initialAptValues={
    id:0,
    aptNumber:"",
    aptName: "",
    aptAddress: "",
    aptCity: "",
    aptType: "",
    aptRent: ""
}

export const aptSchema = Yup.object({
    aptNumber : Yup.string().required("Apartment number is mandatory !!"),
    aptAddress : Yup.string().required("Apartment address is mandatory !!"),
    aptName: Yup.string().required("Apartment Name is mandatory !!"),
    aptRent: Yup.string().required("Rent is mandatory !!"),
    aptCity: Yup.string().required("City is mandatory !!"),
    aptType : Yup.string()//.length(5,"Select valid option !!").required("Apartment type is mandatory !!")
})