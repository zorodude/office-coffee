export class Order {
  _id?: string;
  name: string;
  beverage: string;
  size: string;
  additives: {
    milk: number;
    cream: number;
    sugar: number;
  };
  notes: string;
  tea?: string;
}
