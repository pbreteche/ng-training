import {Component, Input, OnInit} from '@angular/core';
import {Training} from '../training';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {

  @Input()
  toto: Training;

  constructor() { }

  ngOnInit() {
  }

}
