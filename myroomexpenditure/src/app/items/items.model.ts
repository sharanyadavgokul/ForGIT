

export class Items {
    public date: Number;
    public itemName: String;
    public description: String;
    public amount: Number;

    constructor(date: Number, itemName: String, desc: String, amount: Number) {
        this.date = date;
        this.itemName = itemName;
        this.description = desc;
        this.amount = amount;
    }
}
