import { Item } from './Item';

// your code goes here
export abstract class Weapon extends Item {
    // instance variable
    public static readonly MODIFIER_CHANGE_RATE: number = 0.05;
    private _baseDamage: number;
    private _damageModifier: number;
    private _baseDurability: number;
    private _durabilityModifier: number;

    constructor(
        name: string,
        value: number,
        weight: number,
        baseDamage: number,
        baseDurability: number
    ) {
        super(name, value, weight);
        this._baseDamage = baseDamage;
        this._baseDurability = baseDurability;
    }

    // abstract method
    public abstract polish(): void;

    // getters and setters
    //  Effective damage and effective durability
    public get getDamage(): number {
        return this._baseDamage + this._damageModifier;
    }

    public get getDurability(): number {
        return this._baseDurability + this._durabilityModifier;
    }

    // base methods getters and setters
    public get getBaseDamage(): number {
        return this._baseDamage;
    }
    public get getDamageModifier(): number {
        return this._damageModifier;
    }
    public get getBaseDurability(): number {
        return this._baseDurability;
    }
    public get getDurabilityModifier(): number {
        return this._durabilityModifier;
    }
    public set setBaseDamage(value: number) {
        this._baseDamage = value;
    }
    public set setDamageModifier(value: number) {
        this._damageModifier = value;
    }
    public set setBaseDurability(value: number) {
        this._baseDurability = value;
    }
    public set setDurabilityModifier(value: number) {
        this._durabilityModifier = value;
    }

    // implementation of abstract methods of parent class
    public use(): string {
        let str = `You use the ${this.getName}, dealing ${this.getDamage} points of damage.`;

        if (this.getDurability >= 0) {
            return str;
        }

        this.setBaseDurability =
            this._baseDurability - Weapon.MODIFIER_CHANGE_RATE;
        if (this.getDurability <= 0)
            str = `You use the ${this.getName}, dealing ${this.getDamage} points of damage. The ${this.getName} breaks.`;
        else if (this.getDurability <= 0 && this.getName === 'hammer')
            str = `You can't use the ${this.getName}, it is broken.`;
        return str;
    }
    public toString(): string {
        return `${this.getName} - Value : ${this.getValue}, Weight : ${
            this.getWeight
        }, Damage : ${this.getDamage}, Durability : ${
            this.getDurability * 100
        }%`;
    }
}
