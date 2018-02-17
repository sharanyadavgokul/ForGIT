
export class BooksModel {
    private id: Number;
    public title: String;
    private author: String;
    private image: String;
    private ISBN: String;

    constructor(id: Number, title: String, author: String, image: String, ISBN: String) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.image = image;
        this.ISBN = ISBN;
    }
}
