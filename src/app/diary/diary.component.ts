import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diarys:Diary[] = [
    new Diary(1, 'Doing Sport every weekend','to have good health'),
    new Diary(2,'Lear Angular and javascript','be sofware developer'),
    new Diary(3,'Reduce Stress in my life','good health'),
    new Diary(4,'TRavel to USA for 2 weeks', 'holiday'),
    new Diary(5,'Visit my family in Guinea in 2021','social '),
    new Diary(6,'Eat less Red Meat','avoid blood pressure'),
  ];
  
  toggleDetails(index){
    this.diarys[index].showDescription = !this.diarys[index].showDescription;
  }
  completeDiary(isComplete, index){
    if (isComplete) {
      this.diarys.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
