import { Component } from '@angular/core';
import { Diary } from './diary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diarys:Diary[] =  [
    new Diary(1, 'Doing Sport every weekend','to have good health',new Date(2020,3,14)),
    new Diary(2,'Lear Angular and javascript','be sofware developer',new Date(2019,6,9)),
    new Diary(3,'Reduce Stress in my life','good health',new Date(2022,1,12)),
    new Diary(4,'TRavel to USA for 2 weeks', 'holiday',new Date(2019,0,18)),
    new Diary(5,'Visit my family in Guinea in 2021','social ',new Date(2019,2,14)),
    new Diary(6,'Eat less Red Meat','avoid blood pressure',new Date(2030,3,14)),
  ];
}