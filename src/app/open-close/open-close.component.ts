import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
          backgroundColor: 'yellow',
          height: '50px'
        })
      ),
      state(
        'close',
        style({
          opacity: 0.5,
          backgroundColor: 'green',
          height: '100px'
        })
      ),
      transition('open => close', [animate('0.5s')]),
      transition('close => open', [animate('1s')])
    ])
  ]
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}

  ngOnInit() {}
}
