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
            price: 1500,
            maxPeople: 20,
            freeSpots: 20,
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
            freeSpots: 20,
            imageUrl: "https://www.completefrance.com/wp-content/uploads/2022/04/paris-the-capital-of-france-762d67b1-670x377.jpg"
        },
        {
            id: 3,
            name: "Tour of Spain",
            description: "A tour of Spain",
            destination: "Spain",
            startDate: new Date("2020-07-01"),
            endDate: new Date("2020-07-10"),
            price: 3000,
            maxPeople: 20,            
            freeSpots: 20,
            imageUrl: "https://www.civitatis.com/blog/wp-content/uploads/2023/07/shutterstock_557625622-1920x1289.jpg"
        },
        {
            id: 4,
            name: "Tour of Germany",
            description: "A tour of Germany",
            destination: "Germany",
            startDate: new Date("2020-08-01"),
            endDate: new Date("2020-08-10"),
            price: 2000,
            maxPeople: 20,
            freeSpots: 20,
            imageUrl: "https://www.travelandleisure.com/thmb/2WyEBfzLSAW7HgqiuC1-qbySpA8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-rothenburg-ob-der-tauber-PLACESGER0623-a9378cf8ee2b45be96e72e662597a036.jpg"
        },
        {
            id: 5,
            name: "Tour of Greece",
            description: "A tour of Greece",
            destination: "Greece",
            startDate: new Date("2020-09-01"),
            endDate: new Date("2020-09-10"),
            price: 2000,
            maxPeople: 20,
            freeSpots: 20,
            imageUrl: "https://static.independent.co.uk/2023/04/13/13/iStock-475124388.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp"
        },
        {
            id: 6,
            name: "Tour of England",
            description: "A tour of England",
            destination: "England",
            startDate: new Date("2020-10-01"),
            endDate: new Date("2020-10-10"),
            price: 2000,
            maxPeople: 20,
            freeSpots: 20,
            imageUrl: "https://www.worldatlas.com/r/w960-q80/upload/c7/28/32/untitled-design-207.jpg"
        },
        {
            id: 7,
            name: "Tour of Scotland",
            description: "A tour of Scotland",
            destination: "Scotland",
            startDate: new Date("2020-11-01"),
            endDate: new Date("2020-11-10"),
            price: 2000,
            maxPeople: 20,
            freeSpots: 20,
            imageUrl: "https://media.gadventures.com/media-server/cache/74/93/7493a191de5a82c29b247c22c088564b.jpg"
        },
        {
            id: 8,
            name: "Tour of Ireland",
            description: "A tour of Ireland",
            destination: "Ireland",
            startDate: new Date("2020-12-01"),
            endDate: new Date("2020-12-10"),
            price: 2000,
            maxPeople: 20,
            freeSpots: 20,
            imageUrl: "https://wszib.edu.pl/multis/wp-content/uploads/2021/07/666-300x300.png"
        },
        {
            id: 9,
            name: "Tour of Switzerland",
            description: "A tour of Switzerland",
            destination: "Switzerland",
            startDate: new Date("2021-01-01"),
            endDate: new Date("2021-01-10"),
            price: 4000,
            maxPeople: 20,
            freeSpots: 20,
            imageUrl: "https://www.travelandleisure.com/thmb/jy_x15g-12fGtgnCynHz_XhNQBs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-swiss-national-park-PLACESSWITZERLAND1023-a9bcfae7dfb444228ea44ce9b224669d.jpg"
        },
        {
            id: 10,
            name: "Tour of Austria",
            description: "A tour of Austria",
            destination: "Austria",
            startDate: new Date("2021-02-01"),
            endDate: new Date("2021-02-10"),
            price: 2000,
            maxPeople: 20,
            freeSpots: 20,
            imageUrl: "https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0014/14/austria-z-czego-slynie-ten-europejski-kraj-przewodnik-po-austrii-fot-getty-images.jpeg"
        }
      ];

}
