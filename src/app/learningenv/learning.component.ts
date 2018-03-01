import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'learning-page',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent  implements OnInit {
  title = 'Learning page';
  eid:number;
private sub:any;
  constructor(
    private route: ActivatedRoute
  ) {}
ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.eid = +params['eid']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
