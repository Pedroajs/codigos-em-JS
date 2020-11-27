class Book extends Media{
    constructor(title, author, pages){
        super(title);
        this._author =  author;
        this._pages  =  pages;
    }

    get author(){
        return  this._author;
    }

    get pages(){
        return  this._pages;
    }
}

const CavernasDeAço =  new Book('Cavernas  de  Aço','Isaac Asimov', 250);
CavernasDeAço.toggleCheckOutStatus();

CavernasDeAço.addRating(5);
