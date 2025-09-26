import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { investmentService } from '../investment-results/investment.service';
@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResultsComponent {

  private investmentService = inject(investmentService);
  investmentResults = this.investmentService.resultsData.asReadonly();
}
