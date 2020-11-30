class CD extends Media{
    constructor(title,artist){
        super(title);
        this._artist = artist;
        this._songs = [];
    }

    get artist(){
        return this._artist;
    }

    get song(){
        return this._song;
    }

    shuffle(){
        return this._songs.sort()
    }
}