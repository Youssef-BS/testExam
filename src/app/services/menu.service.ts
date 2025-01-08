import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(private http : HttpClient) { }
  apiUrlMenu : string = "http://localhost:3000/menus"
  getListMenus() : Observable<Menu[]>{
    return this.http.get<Menu[]>(this.apiUrlMenu);
  }

  getMenuById(id: number): Observable<Menu> {
    console.log(`Fetching menu with ID: ${id}`);
    return this.http.get<Menu>(`${this.apiUrlMenu}/${id}`);
  }

  updateMenu(idNumber : number , menu: Menu): Observable<Menu> {
    return this.http.put<Menu>(`${this.apiUrlMenu}/${idNumber}`, menu);
  }


}
