import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class AppComponent {
  itemForm: FormGroup;
  items: any[] = [];

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addItem() {
    if (this.itemForm.valid) {
      const newItem = this.itemForm.value;
      this.items.push(newItem);
      this.itemForm.reset();
    }
  }
}
