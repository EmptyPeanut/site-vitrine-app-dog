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