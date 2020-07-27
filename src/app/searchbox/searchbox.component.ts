import { TweetdataService } from './../services/tweetData/tweetdata.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
// import { } from '@services/tweetData/tweetdata.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  dataValidation: boolean;
  marvelHeroes: any = [];
  tweetsData: any = [];
  searchedData: any = [];
  isshowmoreDisable = true;
  content: any[] = new Array();
  counter: number = 0;
  error: string = 'NO TWEETS AVAILABLE SEARCH FOR TWEETS';
  constructor(private fb: FormBuilder, private tweetData: TweetdataService) {

  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      search: ['', Validators.required],
    });
    this.tweetData.getTotalTweeets().subscribe((data: any) => {
      this.tweetsData = data[0].tweets,(err) => console.log(err = this.error);
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.searchedData = [];
      this.isshowmoreDisable = true;
      this.counter = 0;
      const userEntered = this.registerForm.value.search.trim();
      this.marvelHeroes = this.tweetsData.filter((hero) => {
        return hero.TweetSearchName == userEntered;
      });
      if (this.marvelHeroes.length <= 0) {
        this.error = 'NO TWEETS AVAILABLE SEARCH FOR TWEETS';
        this.dataValidation = false;
      }
      else {
        this.dataValidation = true;
        if (this.marvelHeroes[0].tweets.length > 10) {
          for (let i = 0; i < 10; i++) {
            this.counter++;
            this.searchedData.push(this.marvelHeroes[0].tweets[i]);
          }
          this.isshowmoreDisable = false;
        }
        else if (this.marvelHeroes[0].tweets.length > 0) {
          for (let i = 0; i < this.marvelHeroes[0].tweets.length; i++) {
            this.searchedData.push(this.marvelHeroes[0].tweets[i]);
          }
        }
      }
    }
    console.log(this.counter)
  }

  getData() {
    console.log(this.counter + 'dat size' + this.searchedData.length);
    if (!this.isshowmoreDisable && this.counter > 9) {
      if (this.counter <= this.marvelHeroes[0].tweets.length) {
        this.counter = this.counter + 10;
        for (let i = this.counter - 10; i < this.counter; i++) {
          if (this.searchedData.length >= this.marvelHeroes[0].tweets.length) {
            this.isshowmoreDisable = true;
            break;
          }
          else {
            this.searchedData.push(this.marvelHeroes[0].tweets[i]);
          }
        }
      }
    }
  }
}















