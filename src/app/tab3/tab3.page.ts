import { Users } from './../shared/models/customerInfos';
import { LoginService } from './../shared/services/login.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public customerData;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.currentData.subscribe(infos => this.customerData = infos);
  }
}
