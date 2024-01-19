export interface RootState {
  counter: {
    value: number;
    originCountry: string;
    originCity: string;
    destinationCountry: string;
    destinationCity: string;
    passengers: string;
    userId: string;
    selectedDate: string;
  };
}
