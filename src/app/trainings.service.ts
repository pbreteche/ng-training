import { Injectable } from '@angular/core';
import {Training} from './training';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  trainings: Array<Training> = [];

  constructor(private logger: LoggerService) {
    this.trainings.push(new Training());
    this.trainings[0].title = 'Angular';
    this.trainings[0].price = 1200;

    this.trainings.push(new Training());
    this.trainings[1].title = 'HTML';
    this.trainings[1].price = 800;

    this.trainings.push(new Training());
    this.trainings[2].title = 'Javascript';
    this.trainings[2].price = 1000;

    this.logger.log('Trainings generated : success');
  }
}
