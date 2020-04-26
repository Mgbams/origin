import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse,
  HttpEventType,
} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UploadedImages } from './../models/uploadedImages';

const httpOptions: { headers; observe } = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
  observe: 'response',
};

@Injectable({
  providedIn: 'root',
})
export class AddProductsService {
  serverUrl = 'http://localhost/origin/src/application/controllers/';

  constructor(private http: HttpClient) {}

  uploadFile(data) {
    const uploadURL = `${this. serverUrl}/uploadImg.php`;
    return this.http.post(uploadURL, data, {responseType: 'text' });
  }

  getImages(): Promise< UploadedImages[] > {
    const uploadURL = `http://localhost/origin/src/entity/getImages.php`;
    return this.http.get < UploadedImages[] >(uploadURL).toPromise();
   }


  deleteImage(formData) {
    return this.http
      .post<any>(this.serverUrl + 'postproduct.php', formData)
      .toPromise();
  }

  saveProduct(formData) {
    return this.http
      .post<any>(this.serverUrl + 'postproduct.php', formData)
      .toPromise();
  }
}
