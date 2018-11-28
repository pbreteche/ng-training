import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Training} from '../training';

@Component({
  selector: 'app-training-thumbnail',
  templateUrl: './training-thumbnail.component.html',
  styleUrls: ['./training-thumbnail.component.css']
})
export class TrainingThumbnailComponent implements OnInit {

  @Input()
  training: Training;

  @Output()
  trainingSelected = new EventEmitter<Training>();

  constructor() { }

  ngOnInit() {
  }

  select(): void {
    this.trainingSelected.emit(this.training);
  }

}
