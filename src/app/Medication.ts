export class Medication {
    name: string;
    dosage: string;
    amount: number;

    constructor(name: string, dosage: string, amount: number) {
        this.name = name;
        this.dosage = dosage;
        this.amount = amount;
    }
}