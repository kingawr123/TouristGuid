export interface Currency {
    name: string;
    multiplier: number;
}

export const Currencies: Currency[] = [
    {
        name: 'PLN',
        multiplier: 1
    },
    {
        name: 'EUR',
        multiplier: 4.5
    },
    {
        name: 'USD',
        multiplier: 4
    }
];

export const CurrentCurrency: Currency = Currencies[0];