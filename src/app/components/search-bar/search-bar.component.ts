import { Component, EventEmitter, Output } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [provideNativeDateAdapter()],
  template: `
    <div>
      <form
        [formGroup]="queryForm"
        (submit)="search()"
        class="flex md:flex-row flex-col gap-2"
      >
        <div class="flex flex-col">
          <label>City</label>
          <input
            matInput
            id="city"
            formControlName="city"
            class="rounded-lg p-3"
            placeholder="City"
          />
        </div>
        <div class="flex flex-col">
          <label>Start Date</label>
          <input
            class="rounded-lg p-3"
            type="datetime-local"
            formControlName="startedAt"
            id="startedAt"
            onkeydown="return false"
            [min]="now"
          />
        </div>
        <div class="flex flex-col">
          <label>End Date</label>
          <input
            class="rounded-lg p-3"
            type="datetime-local"
            onkeydown="return false"
            formControlName="endedAt"
            id="endedAt"
          />
        </div>
        <button type="submit" class="bg-neutral-400 rounded-lg mt-6 py-3 px-4">
          Search
        </button>
      </form>
    </div>
    <button
      *ngIf="appliedFilters"
      (click)="clearFilters()"
      class="bg-cyan-200 rounded-lg py-1 px-2 mt-10"
    >
      Clear filters
    </button>
  `,
})
export class SearchBarComponent {
  now: string = new Date().toISOString().slice(0, 16);
  @Output() searchChanged: EventEmitter<{
    city: string | null | undefined;
    startedAt: Date | null | undefined;
    endedAt: Date | null | undefined;
  }> = new EventEmitter();

  queryForm = new FormGroup({
    city: new FormControl(),
    startedAt: new FormControl(),
    endedAt: new FormControl(),
  });

  appliedFilters: boolean = false;

  clearFilters() {
    this.queryForm.reset();
    this.searchChanged.emit({
      city: undefined,
      startedAt: undefined,
      endedAt: undefined,
    });
    this.appliedFilters = false;
  }

  search() {
    this.appliedFilters = true;
    this.searchChanged.emit({
      city: this.queryForm.value.city,
      startedAt: this.queryForm.value.startedAt,
      endedAt: this.queryForm.value.endedAt,
    });
  }
}
