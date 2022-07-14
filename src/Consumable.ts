import { Item } from './Item';

export abstract class Consumable extends Item {
    private _consumed: boolean;
    private _spoiled: boolean;

    constructor(spoiled: boolean);
    constructor(spoiled?: any, name?: string, value?: number, weight?: number) {
        super(name, value, weight);
        this._spoiled = spoiled;
        this._consumed = false;
    }
    // abstract method
    public abstract eat(): string;

    // getters and setters
    public get isConsumed(): boolean {
        return this._consumed;
    }
    public get isSpoiled(): boolean {
        return this._spoiled;
    }
    public set setConsumed(consumed: boolean) {
        this._consumed = consumed;
    }
    // implementation methods
    public use(): string {
        if (!this.isSpoiled && !this.isConsumed) {
            return this.eat();
        }
        return this.getName === 'bread' && this.isConsumed
            ? `There is nothing left of the bread to consume`
            : '';
    }
    public toString(): string {
        if (this.getName === 'bread' && this.isSpoiled)
            return ` You eat the bread.
                You feel sick`;
        return '';
    }
}
