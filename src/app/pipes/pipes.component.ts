import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  payeeName: string;
  paymentDate: string;
  amount: string;
  height: string;
  miles: number;

  constructor() { }

  ngOnInit(): void {
  }

}
