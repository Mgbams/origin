import { ContactService } from './shared/services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public messageStatus;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) { 
    this.contactForm = this.formBuilder.group({
      subject: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    const formdata = {
      data: [
        {
          info: this.contactForm.value
        }
      ]
    };
    this.contactService
        .sendMessage(formdata)
        .then(response => {
        console.log(response);
          // this.messageStatus = response;
        })
        .catch(error => {
        console.log(error);
          // this.messageStatus = error;
        });
  }

}
