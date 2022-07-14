import { Weapon } from './Weapon';

// your code goes here
export class Bow extends Weapon {
    constructor(
        value: number,
        weight: number,
        baseDamage: number,
        baseDurability: number
    ) {
        super('bow', value, weight, baseDamage, baseDurability);
    }
    public polish(): void {
        if (this.getDurability < 1)
            this.getDurabilityModifier + Weapon.MODIFIER_CHANGE_RATE;
    }
}
