import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  eyeExercises;
  medications;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.initDummyData();

    this.dataService.getEyeExercises().subscribe(exercises => {
      this.eyeExercises = exercises;
    });

    this.dataService.getMedications().subscribe(meds => {
      this.medications = meds;
    });
  }

}
