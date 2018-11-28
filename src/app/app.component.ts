import { Component } from '@angular/core';
import {Training} from './training';
import {TrainingsService} from './trainings.service';
import {LoggerService} from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dawan';
  trainings: Training[];
  currentTraining: Training;

  constructor(trainingsService: TrainingsService, private logger: LoggerService) {
    this.trainings = trainingsService.trainings;
    this.currentTraining = this.trainings[0];
  }

  add(training: Training): void {
    this.logger.log('new training');
    this.trainings.push(training);
    this.currentTraining = training;
  }

  setCurrent(training: Training): void {
    this.currentTraining = training;
  }

}
