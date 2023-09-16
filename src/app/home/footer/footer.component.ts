import { Component } from '@angular/core';
import { ApiService } from './footer.component.api-service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  subscribeForm: FormGroup;
  message: string = '';

  public subscriberMail: string = '';

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
      subscriberMail: ['', [Validators.required, Validators.email]],
    });
  }

  public async onSubscribe() {
    console.log(this.subscriberMail, this.subscribeForm.valid);

    this.apiService.subscribeToNewsletter(this.subscriberMail).subscribe({
      complete: () => {}, // completeHandler
      error: () => {}, // errorHandler
      next: () => {}, // nextHandler
    });

    // if (this.subscribeForm.valid) {
    //   const email = this.subscribeForm.value.email;

    // }
  }
}
