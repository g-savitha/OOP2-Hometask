import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

// your code goes here
export class Inventory implements ItemComparator {
    private _items: Array<Item> = [];

    public addItem(item: Item): void {
        this._items.push(item);
    }

    public sort(): void;
    public sort(comparator?: ItemComparator) {
        if (!comparator) this._items.sort((a, b) => a.getValue - b.getValue);
        this._items.sort((a, b) => a.getWeight - b.getWeight);
    }

    public toString(): string {
        return [...this._items].join(', ').toString();
    }
    //Implemented method
    public compare(first: Item, second: Item): number {
        // your code goes here
        return first.compareTo(second);
    }
}
