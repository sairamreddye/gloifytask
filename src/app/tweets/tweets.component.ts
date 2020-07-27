import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
 @Input () dataContains : boolean;
 @Input () tweets : any;
 
  constructor() { }

  ngOnInit(): void {
  }

}
