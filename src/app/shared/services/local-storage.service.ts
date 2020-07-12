import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  setItem<type = string>(key: string, value: type) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  readItem(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
