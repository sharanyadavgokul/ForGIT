

export class Items {
    public date: Date;
    public itemName: String;
    public description: String;
    public amount: number;
    public share:String;
    public used1:boolean;
    public used2:boolean;


    constructor(date: Date, itemName: String, desc: String, amount: number, share:String, used1:boolean,used2:boolean) {
        this.date = date;
        this.itemName = itemName;
        this.description = desc;
        this.amount = amount;
        this.share=share;
        this.used1=used1;
        this.used2=used2;
    }
}
