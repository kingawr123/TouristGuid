import { Tour } from "./models/Tour";


export class MockData{
    public static tours: Tour[] = [
        {
            id: 1,
            name: "Tour of Italy",
            description: "A tour of Italy",
            destination: "Italy",
            startDate: new Date("2020-05-01"),
            endDate: new Date("2020-05-10"),
            price: 1000,
            maxPeople: 20,
            imageUrl: "https://www.ourescapeclause.com/wp-content/uploads/2020/09/shutterstock_1037347711-768x512.jpg"
        },
        {
            id: 2,
            name: "Tour of France",
            description: "A tour of France",
            destination: "France",
            startDate: new Date("2020-06-01"),
            endDate: new Date("2020-06-10"),
            price: 2000,
            maxPeople: 20,
            imageUrl: "https://www.completefrance.com/wp-content/uploads/2022/04/paris-the-capital-of-france-762d67b1-670x377.jpg"
        }
      ];

}
