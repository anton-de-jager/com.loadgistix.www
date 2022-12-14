import { Guid } from "guid-typescript";

export interface SignupRequest {
    userTypeId: Guid;
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    description: string;
    phone: string;
    web: string;
    lat: number;
    lon: number;
    address: string;
    urlImage: string;
    ts: Date;
}