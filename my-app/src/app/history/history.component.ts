import { CurrentCurrency } from './../../utils/constants';
import { Component, OnInit } from '@angular/core';
import { BoughtTour } from '../../models/BoughtTour';
import { HistoryService } from '../../services/history.service';
import { Currency } from '../../utils/constants';
import { CommonModule } from '@angular/common';
import { HistoryItemComponent } from '../history-item/history-item.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, HistoryItemComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit{
  boughtTours: BoughtTour[] = [];

  currency: Currency = CurrentCurrency;

  constructor(private service: HistoryService) { }

  ngOnInit(): void {
      this.service.getHistory().subscribe(data => this.boughtTours = data);
  }
}
