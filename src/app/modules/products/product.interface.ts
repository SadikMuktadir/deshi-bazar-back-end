export interface IProduct {
  image?: string;
  name: string;
  price: number;
  rating: number;
  category?: 'Phone' | 'Computer';
  createdAt?: Date;
  updatedAt?: Date;
}
