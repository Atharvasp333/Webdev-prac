import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ItemsComponent implements OnInit {
  items: any[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    this.items = await this.apiService.getItems();
  }
}
