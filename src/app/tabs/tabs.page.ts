import { Component, OnInit } from '@angular/core';
import { LoginService } from './../shared/services/login.service';
import { Users } from './../shared/models/customerInfos';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  getUserInfos() {
    this.loginService.customerLoggedInDetails();
  }

}
