import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsYouMayLikeService {
  private baseUrl = 'http://localhost/origin/src/application/controllers/products-you-may-like/';

  constructor(private http: HttpClient) { }

  getSuggestedProducts(categoryName, subcategoryName) {
    return this.http.get(`${this.baseUrl}products-you-may-like.php/?category_name=` + categoryName + '&subcategory_name=' +  subcategoryName).toPromise();
   }
}
