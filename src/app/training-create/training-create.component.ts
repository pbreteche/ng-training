import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Training} from '../training';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-training-create',
  templateUrl: './training-create.component.html',
  styleUrls: ['./training-create.component.css']
})
export class TrainingCreateComponent implements OnInit {

  newTraining = new Training();

  @Output()
  trainingCreated = new EventEmitter<Training>();

  constructor() { }

  ngOnInit() {
  }

  create(form: NgForm) {
    this.trainingCreated.emit(this.newTraining);
    this.newTraining = new Training();
    form.reset();
  }

}
