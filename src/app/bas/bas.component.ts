import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bas',
  templateUrl: './bas.component.html',
  styleUrls: ['./bas.component.css']
})
export class BasComponent implements OnInit {
  laValeurDuTextarea: string;

  constructor() {
    this.laValeurDuTextarea = '';

  }

  ngOnInit(): void {
  }

}
