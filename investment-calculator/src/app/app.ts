import { Component, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { UserInputComponent } from './user-input/user-input';
import { OutputData } from './models/outputData.model';
import { InvestmentResultsComponent } from './investment-results/investment-results';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  resultsData = signal<OutputData[] | undefined>(undefined);
    calculateInvestmentResults(data:{
      initialInvestment: number, 
      annualInvestment: number,
      expectedReturn: number, 
      duration: number
    }) {
    const annualData = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: data.initialInvestment +data.annualInvestment * year,
      });
    }
    console.log(annualData);
    this.resultsData.set(annualData);
  }
}
