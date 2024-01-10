import { CommonModule } from '@angular/common';
import { Currency } from '../../utils/constants';
import { BoughtTour } from './../../models/BoughtTour';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-item.component.html',
  styleUrl: './history-item.component.scss'
})
export class HistoryItemComponent {
  @Input() boughtTour: BoughtTour = {} as BoughtTour;
  @Input() currency: Currency = {} as Currency;

}
