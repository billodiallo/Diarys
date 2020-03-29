import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diarys:Diary[] = [
    new Diary(1, 'Doing Sport every weekend','to have good health',new Date(2020,3,14)),
    new Diary(2, 'Lear Angular and javascript','be sofware developer',new Date(2019,6,9)),
    new Diary(3,'Reduce Stress in my life','good health',new Date(2022,1,12)),
    new Diary(4,'TRavel to USA for 2 weeks', 'holiday',new Date(2019,0,18)),
    new Diary(5,'Visit my family in Guinea in 2021','social ',new Date(2019,2,14)),
    new Diary(6,'Eat less Red Meat','avoid blood pressure',new Date(2030,3,14)),
  ];
  
  toggleDetails(index){
    this.diarys[index].showDescription = !this.diarys[index].showDescription;
  }
  completeDiary(isComplete, index){
    if (isComplete) {
      this.diarys.splice(index,1);
    }
  }
  deleteDiary(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.diarys[index].name}?`)

      if (toDelete){
        this.diarys.splice(index,1)
      }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  addNewDiary(diary){
    let diaryLength = this.diarys.length;
    diary.id = diaryLength+1;
    diary.completeDate = new Date(diary.completeDate)
    this.diarys.push(diary)

}
}
