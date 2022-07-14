import { Weapon } from './Weapon';

// your code goes here
export class Sword extends Weapon {
    constructor(
        value: number,
        weight: number,
        baseDamage: number,
        baseDurability: number
    ) {
        super('sword', value, weight, baseDamage, baseDurability);
    }

    public polish(): void {
        this.getDamageModifier +
            Weapon.MODIFIER_CHANGE_RATE +
            this.getBaseDamage * 0.25;
    }
}
