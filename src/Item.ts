import { Comparable } from './Comparable';

export abstract class Item implements Comparable<Item> {
    private _id: number;
    private _value: number;
    private _name: string;
    private _weight: number;

    private static _counter = 0;

    constructor(name?: any, value?: any, weight?: any) {
        (this._name = name),
            (this._value = value),
            (this._weight = weight),
            (this._id = Item.getNumberOfItems);
    }
    // abstract methods
    public abstract use(): void;

    // Getters and setters
    public get getId(): number {
        return this._id;
    }
    public get getValue(): number {
        return this._value;
    }
    public get getName(): string {
        return this._name;
    }
    public get getWeight(): number {
        return this._weight;
    }
    public static get getNumberOfItems(): number {
        return Item._counter++;
    }

    public set setId(id: number) {
        this._id = id;
    }
    public set setValue(price: number) {
        this._value = price;
    }
    public set setName(name: string) {
        this._name = name;
    }
    public set setWeight(weight: number) {
        this._weight = weight;
    }
    public reset(): void {
        Item._counter = 0;
    }

    // Compares two strings lexicographically
    private compareTwoStrings(str1: string, str2: string): number {
        for (let i = 0; i < str1.length && i < str2.length; i++) {
            if (str1.charCodeAt(i) === str2.charCodeAt(i)) continue;
            else return str1.charCodeAt(i) - str2.charCodeAt(i);
        }
        if (str1.length < str2.length) {
            return str1.length - str2.length;
        } else if (str1.length > str2.length) {
            return str1.length - str2.length;
        }
        return 0;
    }

    // Implemented methods
    public compareTo(other: Item): number {
        if (this.getValue > other.getValue) {
            return 1;
        } else if (this.getValue === other.getValue) {
            return this.compareTwoStrings(
                this._name.toLowerCase(),
                other._name.toLowerCase()
            );
        }
        return -1;
    }
    public toString(): string {
        return `${this._name} - Value : ${this._value}, Weight : ${this._weight}`;
    }
}
