import { Injectable } from '@angular/core';
import { Medication } from './Medication';
import { EyeExercise } from './EyeExercise';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  medicationList = [];
  eyeExerciseList = [];

  medicationListObs = new BehaviorSubject([]);
  eyeExerciseListObs = new BehaviorSubject([]);

  constructor() { }

  initDummyData(): void {
    this.medicationList = [
      new Medication('Panodil', '500mg', 2)
    ];

    this.eyeExerciseList = [
      new EyeExercise('Prisme 5', 2, '16stk', '1m'),
      new EyeExercise('Prisme 10', 2, '12stk', '2m'),
      new EyeExercise('Cirkler', 1, '4stk', '?', ['Bevægelse frem og tilbage til sidst']),
      new EyeExercise('Klokke', 1, '4sec', '', ['Butterfly + ind mod næsen']),
      new EyeExercise('Post-It', 2, '', '80cm?'),
    ];

    this.medicationListObs = new BehaviorSubject(this.medicationList);
    this.eyeExerciseListObs = new BehaviorSubject(this.eyeExerciseList);
  }

  getMedications(): BehaviorSubject<Medication[]> {
    return this.medicationListObs;
  }

  getEyeExercises(): BehaviorSubject<EyeExercise[]> {
    return this.eyeExerciseListObs;
  }
}
