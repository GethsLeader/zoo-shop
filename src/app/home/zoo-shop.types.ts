import {Animal} from '../models/zoo-shop.models';

export type Animals = Animal[];

export interface Category {
  title: string,
  id: string
}

export type Categories = Category[];

export interface ZooShop {
  categories: Categories;
  animals: Animals;
}
