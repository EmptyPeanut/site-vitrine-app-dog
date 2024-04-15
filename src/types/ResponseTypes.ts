import type { DogType } from "./DogType";

export type LoginResponse = {
    user_id: number;
    token: string;
    roles: string[]
}

export type ErrorResponse = {
    code: number;
    message: string;
}

export type SexResponse = {
    id?: number;
    name: string;
}

export type UsersIhm = {
    total_items: number;
    users: UserIhm[]
}

export type UserIhm = {
    id: number;
    email: string;
    pseudo: string;
    firstName: string;
    lastName: string;
    birthdate: string;
    notifyFriends: boolean;
    roles: string[];
    sex: SexResponse
}