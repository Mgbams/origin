import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-policy-footer',
  templateUrl: './policy-footer.component.html',
  styleUrls: ['./policy-footer.component.scss'],
})
export class PolicyFooterComponent implements OnInit {
  public automaticClose = false;
  public information: any;
  constructor( private http: HttpClient) {
    this.http.get('./../../assets/data/accordion-data.json').subscribe(res=> {
      this.information = res['items'];
      // this.information[0].open = true;
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
