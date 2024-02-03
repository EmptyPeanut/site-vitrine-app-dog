export type LoginResponse = {
    user_id: number;
    token: string;
}

export type ErrorResponse = {
    code: number;
    message: string;
}