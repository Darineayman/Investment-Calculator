import { Component, Input } from '@angular/core';
import { OutputData } from '../models/outputData.model';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResultsComponent {
  @Input() investmentResults?: OutputData[];


}
