class CD extends Media{
    constructor(isCheckedOut,rattings,title,artist,song){
        super(isCheckedOut,title,rattings);
        this._artist = artist;
        this._song  = song;
    }

    get artist(){
        return  this._artist;
    }

    get song(){
        return  this._song;
    }
}