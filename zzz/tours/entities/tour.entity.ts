import { IntegerType } from "typeorm";

export class tour {
    id: number;
    country: string;
    price: IntegerType;
    is_free: boolean;
}