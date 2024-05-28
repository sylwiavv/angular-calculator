import {Component, input, inject, computed} from '@angular/core';
import {type Result} from "../investment-input.model";
import {CurrencyPipe} from "@angular/common";
import {InvestmentService} from "../../investment.service";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // @Input() results?: Result[]
  // results = input<Result[]>()

  private investmentService = inject(InvestmentService)

  // get results() {
  //   return this.investmentService.resultData
  // }

  // 1.way
  results = computed(() => this.investmentService.resultData())

  // 2.way
  // results = () => this.investmentService.resultData.asReadonly()
}
