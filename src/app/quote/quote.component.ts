import { Quotes } from './../quote';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [

    new Quotes(1, 'You are braver than you believe, and stronger than you seem, and smarter than you think', `Albert Einstein`,0, 0,`kirezi`, new Date(2020, 5, 30)),

  ];
  deleteQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)

  }

  highlighter(index){
    const check = this.quotes[index].upvote;
    if(this.quotes.length > 0) {
      const votes = [];
     this.quotes.forEach(quote => votes.push(quote.upvote));
     if (check === Math.max(...votes)) {
      return true;
    }
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
