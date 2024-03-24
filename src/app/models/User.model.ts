import { City } from "./City.model";

export interface User{
    name:string,
    email:string,
    phone:string,
    city:City,
    description:string,
    refreshToken:string,
    role:string,
    token:string,
}