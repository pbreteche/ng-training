import { Component } from '@angular/core';
import {Training} from './training';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dawan';
  training: Training;

  constructor(){
    this.training = new Training();
    this.training.title = 'Angular';
    this.training.price = 1200;
  }
}
