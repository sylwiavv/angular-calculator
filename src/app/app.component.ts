import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {type InvestmentInput, Result} from "./investment-input.model";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ]
})
export class AppComponent {
  resultData: Result[] | undefined = undefined
  onCalculateInvestmentResults({initialInvestment, duration, expectedReturn, annualInvestment}: InvestmentInput) {
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultData = annualData
    // return annualData;
  }
}
