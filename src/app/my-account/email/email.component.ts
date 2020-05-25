import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  public changeEmailForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.changeEmailForm = this.formBuilder.group({
      currentEmail: ['', Validators.required],
      newEmail: ['', Validators.required],
      confirmEmail: ['', Validators.required]
    });
   }

  ngOnInit() {}

  onSubmit() {
    console.log('changeEmailForm form', this.changeEmailForm.value);
  }

}
