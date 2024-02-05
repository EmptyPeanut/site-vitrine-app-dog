export type LoginRequest = {
    email: string;
    password: string;
}

export type RegisterRequest = {
    email: string,
    pseudo: string,
    firstName: string,
    lastName: string,
    password: string,
    sex: {
        id?: number
    },
    birthdate?: string,
    address: AddressType
}

type AddressType = {
    address?: string,
    zipCode?: number,
    city?: string
}