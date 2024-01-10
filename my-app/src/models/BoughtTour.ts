export interface BoughtTour {
    id: string,
    tourId: string,
    name: string,
    description: string,
    destination: string,
    price: number,
    startDate: Date,
    endDate: Date,
    imageUrl: string,
    reservedSpots: number,
    totalPrice: number,
    boughtDate: Date
}
