import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = signal('1000');
  enteredAnnualInvestment = signal('100');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investService: InvestmentService) {

  }

  onSubmit() {
    this.investService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    });
    this.enteredAnnualInvestment.set('1000')
    this.enteredDuration.set('100')
    this.enteredExpectedReturn.set('5')
    this.enteredInitialInvestment.set('10')
  }
}
