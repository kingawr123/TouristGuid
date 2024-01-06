export interface Reservation {
    id: string,
    userId: string,
    tourId: string,
    totalPrice: number,   
    reservedSpots: number,
    createdAt: Date,
    updatedAt: Date
}