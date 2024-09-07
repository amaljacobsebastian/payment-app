import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class PaymentComponent {
  payment = {
    accountName: '',
    accountNumber: '',
    amount: 0,
    bankCode: ''
  };

  constructor(private paymentService: PaymentService) {}

  onSubmit() {
    this.paymentService.processPayment(this.payment).subscribe(
      (response) => {
        console.log('Payment successful:', response);
        alert('Payment processed successfully. Reference ID: ' + response);
      },
      (error) => {
        console.error('Payment failed:', error);
        alert('Payment failed. Please try again.');
      }
    );
  }
}
