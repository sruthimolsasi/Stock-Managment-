import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

 
  addproduct(productData:any){
         const baseurl='http://localhost:3012/productList'
         return this.http.post(baseurl,productData)
    }
  }

