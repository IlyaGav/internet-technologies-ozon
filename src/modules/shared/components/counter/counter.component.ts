import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  @Input() count: number = 0;
  @Output() countChange = new EventEmitter();
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();

  _increment() {
    this.countChange.emit(++this.count);
    this.increment.emit();
  }

  _decrement() {
    if (this.count === 0 ) return;

    this.countChange.emit(--this.count);

    this.decrement.emit();
  }
}
