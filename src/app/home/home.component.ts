import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Animals, Categories, Category, ZooShop} from "./zoo-shop.types";
import {delay, forkJoin, map, Observable, shareReplay, startWith} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private _httpClient: HttpClient;

  loading$: Observable<boolean> | null;
  zooShop$: Observable<ZooShop> | null;
  selectedCategory: string | null;

  constructor() {
    this._httpClient = inject(HttpClient);

    this.loading$ = null;
    this.zooShop$ = null;
    this.selectedCategory = null;
  }

  ngOnInit() {
    this.loading$ = this._getZooShop().pipe(
      map(() => false),
      startWith(true),
    );

    this.zooShop$ = this._getZooShop();
  }

  selectCategory(category: Category) {
    this.selectedCategory = category.id;
  }

  private _getZooShop() {
    return forkJoin({
      categories: this._getCategories(),
      animals: this._getAnimals(),
    }).pipe(shareReplay())
  }

  private _getCategories(): Observable<Categories> {
    return this._httpClient.get<Categories>('/assets/api/store/categories.json');
  }

  private _getAnimals(): Observable<Animals> {
    // delay to simulate network lag
    return this._httpClient.get<Animals>('/assets/api/store/goods.json').pipe(delay(2000));
  }
}
