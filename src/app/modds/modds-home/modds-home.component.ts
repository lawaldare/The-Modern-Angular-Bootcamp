import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modds-home',
  templateUrl: './modds-home.component.html',
  styleUrls: ['./modds-home.component.scss']
})
export class ModdsHomeComponent implements OnInit {

  modalOpen: boolean = false

  items = [
    {
      title: "Why is the sky blue?",
      content: "The sky is blue beacuse it is blue"
    },
    {
      title: "What does an orange taste like?",
      content: "An orange taste like an orange"
    },
    {
      title: "Who are your best 3 Liverpool forwards?",
      content: "Mo Salah, Sadio Mane and Firmino"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
