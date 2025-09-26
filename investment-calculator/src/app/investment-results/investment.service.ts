import { Injectable, signal} from "@angular/core";
import { OutputData } from '../models/outputData.model';
import { UserInputData} from '../models/userInputData.model'
@Injectable({providedIn: 'root'})
export class investmentService {
    resultsData = signal<OutputData[] | undefined>(undefined);
    calculateInvestmentResults(data: UserInputData) {
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