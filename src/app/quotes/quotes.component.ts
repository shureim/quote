import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quoted = [
    new Quote(1, `Leo Tolstoy`, `Everyone thinks of changing the world but no one thinks of changing himself`,  'Tarick', 0, 0, 0),
    new Quote(2,  'Nelson Mandela ', 'Education is the most powerful weapon which you can use to change the world.',  'Joe', 0, 0, 0),
    new Quote(3,  'Mary Wollstonecraft Shelley, Frankenstein', 'Nothing is so painful to the human mind as a great and sudden change.',  'Donald', 0, 0, 0),
    new Quote(4,  'Jay Asher', 'You cannot stop the future,You cannot rewind the past. The only way to learn the secret ...is to press play. ',  'Peter', 0, 0, 0),
    new Quote(5,  'Taylor Swift', 'This is a new year. A new beginning. And things will change.',  'Wanyeki', 0, 0, 0),
    new Quote(6,  'Neil Gaiman', 'Google can bring you back 100,000 answers. A librarian can bring you back the right one.',  'Abdifatah', 0, 0, 0),
  ];

  toggleDetails(index) {
    this.quoted[index].showDescription = !this.quoted[index].showDescription;
  }
  addNewQuotes(quote) {
    const quoteLength = this.quoted.length;
    quote.id = quoteLength + 1;
    this.quoted.push(quote);
  }
  // quoteComplete(isComplete, index) {
  //   if (isComplete) {
  //     this.quoted.splice(index, 1);
  //   }
  // }
  //
  // upVote(index) {
  //   this.quoted[index].upvotes += 1;
  // }
  //
  // downVote(index) {
  //     this.quoted[index].downvotes += 1
  //   }

  constructor() { }

  ngOnInit() {
  }

}
