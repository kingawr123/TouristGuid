export interface Tour {
    id: number;
    name: string;
    description: string;
    destination: string; // country
    startDate: Date;
    endDate: Date;
    price: number;
    maxPeople: number;
    freeSpots: number,
    imageUrl: string;
}