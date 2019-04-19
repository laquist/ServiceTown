export class EyeExercise {
    name: string;
    sets: number;
    reps: string;
    distance: string;
    notes: string[];

    constructor(name: string, sets: number, reps: string, distance: string, notes?: string[]) {
        this.name = name;
        this.sets = sets;
        this.reps = reps;
        this.distance = distance;
        this.notes = notes;
    }
}