import {Component, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {type InvestmentInput} from "../investment-input.model";
import {InvestmentService} from "../../investment.service";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentInput>()

  initialInvestment = signal("0")
  annualInvestment = signal("0")
  expectedInvestment = signal("5")
  durationInvestment = signal("10")

  resetInput() {
    this.initialInvestment.set("0")
    this.annualInvestment.set("0")
    this.expectedInvestment.set("5")
    this.durationInvestment.set("10")
  }

  constructor(private investmentService: InvestmentService) {
  }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedInvestment(),
      duration: +this.durationInvestment()
    })
    // this.calculate.emit()
    this.resetInput()
  }
}
