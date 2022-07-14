// your code goes here

import { Consumable } from './Consumable';

export class Pizza extends Consumable {
    private numberOfSlices: number;
    private sliceEaten: number = 0;

    constructor(numberOfSlices: number, spoiled: boolean) {
        super(spoiled);
        this.numberOfSlices = numberOfSlices;
    }

    public eat(): string {
        if (this.sliceEaten < this.numberOfSlices) {
            this.sliceEaten++;
            if (this.sliceEaten >= this.numberOfSlices) {
                this.setConsumed = true;
            }
            return `You eat a slice of the pizza`;
        }
        return ``;
    }
}
