import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  public items: any=[];

  constructor() { }

  ngOnInit() {
    for(let i=0;i<10;i++)
    this.items.push(i);
  }

}
