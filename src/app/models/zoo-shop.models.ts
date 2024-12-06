export class Animal {
  id: number;
  category: string;
  name: string;

  constructor(id: number, category: string, name: string) {
    this.id = id;
    this.category = category;
    this.name = name;
  }
}

export class Cat extends Animal {
  override category = 'cats';
  weight: number;
  age: number;
  color: string;

  constructor(id: number, category: string, name: string, weight: number, age: number, color: string) {
    super(id, category, name);
    this.category = category;
    this.weight = weight;
    this.age = age;
    this.color = color;
  }
}

export class Dog extends Animal {
  override category = 'dogs';
  weight: number;
  age: number;
  color: string;

  constructor(id: number, category: string, name: string, weight: number, age: number, color: string) {
    super(id, category, name);
    this.category = category;
    this.weight = weight;
    this.age = age;
    this.color = color;
  }
}
