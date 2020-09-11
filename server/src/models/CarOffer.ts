import { Offer } from "./Offer";

export interface CarOffer extends Offer {
    age: string;
    countryOrigin: string;
    fuelType: string;
    make: string;
    mileage: string;
    model: string;
    productionYear: string;
    transmission: string;
}
