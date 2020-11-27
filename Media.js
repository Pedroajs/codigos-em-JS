class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings= [];
    }

    get title(){
        return  this._title;
    }

    get isCheckedOut(){
    return  this._isCheckedOut;
    }
    
    get _rattings(){
        return  this._ratings;
    }
    set isCheckedOut(param) {
        this._isCheckedOut = param;
      }

    toggleCheckOutStatus(){
    //  if(this._isCheckedOut === true){
    //      this._isCheckedOut = false;
    //  }else if(this._isCheckedOut === false){
    //      this._isCheckedOut = true;
    //  }

    this._isCheckedOut != this._isCheckedOut;
    }

    getAverageRating(){
        let soma = this._ratings.reduce((somaAtual, rating) => somaAtual + rating, 0);
        const arrayLength = this._ratings.length;

        return  soma/arrayLength;

    }


    addRating(rating){
        this._ratings.push(rating);
    }
}