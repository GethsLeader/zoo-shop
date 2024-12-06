import {Component, inject} from '@angular/core';
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {HttpClientModule, HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, filter, Observable, of} from "rxjs";
import {MenuData} from "./menu.component.types";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe,
    NgClass
  ],
  providers: [HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  private _httpClient: HttpClient;
  private _router: Router;

  menuData$: Observable<MenuData> | null;
  menuUrl: string;
  errors: Error[];

  constructor() {
    this._httpClient = inject(HttpClient);
    this._router = inject(Router);

    this.menuData$ = null;
    this.menuUrl = '/';
    this.errors = [];
  }

  ngOnInit() {
    this.errors = [];
    this._getMenu();

    this._router.events.pipe(filter((event) => {
      return event instanceof NavigationEnd;
    })).subscribe((event) => {
      this.menuUrl = (event as NavigationEnd).url;
    })
  }

  private _getMenu() {
    this.menuData$ = this._httpClient.get<MenuData>('/assets/api/menu.json').pipe(
      catchError((err: HttpErrorResponse) => {
        this.errors.push(err);
        console.error(err);
        return of([]);
      })
    )
  }
}
