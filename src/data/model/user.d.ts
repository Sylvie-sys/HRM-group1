interface NewUser {
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    phone_number: string
}
interface User{
    id: 0,
    email :string,
    first_name:string,
    last_name:string,
    phone_number:string,
    role:string,
    active: boolean,
    isVerified: boolean,
}
interface 