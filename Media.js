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
    this._isCheckedOut != this._isCheckedOut;
    }

    getAverageRating(){
        let soma = this._ratings.reduce((somaAtual, rating) => somaAtual + rating, 0);
        const arrayLength = this._ratings.length;

        return  soma/arrayLength;

    }


    addRating(rating){

        if(rating >=1 || rating <= 5){
            this._ratings.push(rating);
        } else{
            alert('O rating precisa ser uma nota entre 1 e 5');
        }
    }
}