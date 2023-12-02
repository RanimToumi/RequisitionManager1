import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiBaseUrl=environment.apiBaseUrlMarketing

  constructor(private http : HttpClient) { }
  getProducts(){
    return this.http.get<Product[]>(`${this.apiBaseUrl}/api/product/all`)
  }
  addProduct(product:Product){
    return this.http.post<Product>(`${this.apiBaseUrl}/api/product/add`,product)
  }
}
