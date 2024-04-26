import type { AddressType } from './AddressType';

export type EventType = {
    id?: Number;

    title: string;

    description: string;
    
    maxPeople: number;

    followers: number;

    closed: boolean;

    public: boolean;
    
    date: Date;

    allure: number;

    temps: number;

    distance: number;

    address: AddressType;

    founder: number;

    tabUser: number[];
}