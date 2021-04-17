import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss']
})
export class TypingComponent implements OnInit {

  randomText: string = lorem.sentence();
  enteredText: string = "";
  length

  constructor() { }

  ngOnInit(): void {
  }

  onTyping(event: string) {

    this.enteredText = event;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'success' : 'danger';
  }

}
