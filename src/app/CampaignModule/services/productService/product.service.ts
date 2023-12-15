import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiBaseUrl=environment.apiBaseUrlMarketing
  private token = localStorage.getItem('token');
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  constructor(private http : HttpClient) { }
  getProducts(){
    return this.http.get<Product[]>(`${this.apiBaseUrl}/api/product/all`)
  }
  getProductById(id:number){
    return this.http.get<Product>(`${this.apiBaseUrl}/api/product/find/${id}`)
  }
  deleteProductById(id:number){
    const headers = this.getHeaders();
    return this.http.delete<Product>(`${this.apiBaseUrl}/api/product/delete/${id}`,{ headers})
  }
  UpdateProduct(product:Product){
    const headers = this.getHeaders();
    return this.http.put<Product>(`${this.apiBaseUrl}/api/product/update`,product,{ headers})
  }
  addProduct(product:Product){
    const headers = this.getHeaders();
    return this.http.post<Product>(`${this.apiBaseUrl}/api/product/add`,product,{ headers})
  }
}
