export interface Tour {
    id: string;
    name: string;
    description: string;
    destination: string; // country
    startDate: Date;
    endDate: Date;
    price: number;
    maxPeople: number;
    imageUrl: string;
}