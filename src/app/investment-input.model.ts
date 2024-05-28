export interface InvestmentInput {
  initialInvestment: number,
  duration: number,
  expectedReturn: number,
  annualInvestment: number
}

export interface Result {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number
}
