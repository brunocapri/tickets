import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
})
export class PaginatorComponent {
  router: Router = inject(Router);

  @Input() total: number = 0;
  @Input() current: number = 0;
  @Input() loading: boolean = false;

  @Output() pageChangeNext = new EventEmitter<boolean>();
  @Output() pageChangePrevious = new EventEmitter<boolean>();

  goPrevious() {
    if (this.current > 0) {
      this.pageChangePrevious.emit(true);
    }
  }

  goNext() {
    if (this.current + 1 >= this.total) {
      return;
    }

    this.pageChangeNext.emit(true);
  }
}
