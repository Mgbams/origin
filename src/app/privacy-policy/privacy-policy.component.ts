import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {
  public automaticClose = false;
  public information: any;

  constructor(private http: HttpClient) {
    this.http.get('./../../assets/data/privacy-policy-data.json').subscribe(res=> {
      this.information = res['items'];
    });
   }

  ngOnInit() {}

  toggleSection(index) {
    this.information[index].open = !this.information[index].open;
    if (this.automaticClose && this.information[index].open) {
      this.information
      .filter((item, itemIndex) => itemIndex !== index)
      .map(item => item.open = false);
    }
  }

  toggleItem(index, childIndex) {
    this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open;
  }

}
