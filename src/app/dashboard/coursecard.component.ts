import { Component } from '@angular/core';
import { ElearningService }   from '../services/elearning.service';

@Component({
  selector: 'course-card',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.css']
})
export class CoursecardComponent {
  title = 'Course card section';
  cards:any;
  constructor(private elearningService: ElearningService){

  };
  ngOnInit(){
	this.getCards();
  };

  getCards(){
    let clsObj:any=this;
    this.elearningService.getElearnings().then(function(d){
      clsObj.cards = d;
    });
  };
 
}
