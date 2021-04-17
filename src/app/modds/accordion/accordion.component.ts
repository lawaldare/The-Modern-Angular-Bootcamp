import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() items: { title: string, content: string }[] = [];
  openedItemIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number): void {
    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }

}
