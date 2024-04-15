import type { DogType } from "./DogType";

export type UserDetails = {
    id?: number;
    pseudo?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    birthdate?: string;
    address?: string;
    zipCode?: number;
    city?: string;
    notifyFriends?: boolean;
    dogs?: DogType[];
}