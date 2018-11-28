import { Component } from '@angular/core';
import {Training} from './training';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dawan';
  trainings: Training[] = [];
  currentTraining: Training;

  constructor() {
    this.trainings.push(new Training());
    this.trainings[0].title = 'Angular';
    this.trainings[0].price = 1200;

    this.trainings.push(new Training());
    this.trainings[1].title = 'HTML';
    this.trainings[1].price = 800;

    this.trainings.push(new Training());
    this.trainings[2].title = 'Javascript';
    this.trainings[2].price = 1000;

    this.currentTraining = this.trainings[0];
  }

  add(training: Training): void {
    this.trainings.push(training);
    this.currentTraining = training;
  }

  setCurrent(training: Training): void {
    this.currentTraining = training;
  }

}
