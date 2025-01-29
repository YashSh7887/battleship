class Ship1{
    constructor(){
        this.length=1;
    }
    add(x,y,GameBoard){
        GameBoard.board[x][y]=1;
    }
    hit(){
        this.length--;
    }
    isSunk(){
        if(this.length==0){
            return true;
        }
    }
}
class Ship2{
    constructor(){
        this.length=3;
        this.rotation="horizontal";
    }
    add(x,y,GameBoard){
        if(this.rotation=="horizontal"){
            GameBoard.board[x][y]=2;
            GameBoard.board[x][y+1]=2;
            GameBoard.board[x][y+2]=2;
        }
        else{
            GameBoard.board[x][y]=2;
            GameBoard.board[x+1][y]=2;
            GameBoard.board[x+2][y]=2;
        }
    }
    hit(){
        this.length--;
    }
    isSunk(){
        if(this.length==0){
            return true;
        }
    }
}
class Ship3{
    constructor(){
        this.length=4;
        this.rotation="horizontal";
    }
    add(x,y,GameBoard){
        if(this.rotation=="horizontal"){
            GameBoard.board[x][y]=3;
            GameBoard.board[x][y+1]=3;
            GameBoard.board[x][y+2]=3;
            GameBoard.board[x][y+3]=3;
        }
        else{
            GameBoard.board[x][y]=3;
            GameBoard.board[x+1][y]=3;
            GameBoard.board[x+2][y]=3;
            GameBoard.board[x+3][y]=3;
        }
    }
    hit(){
        this.length--;
    }
    isSunk(){
        if(this.length==0){
            return true;
        }
    }

}
export {Ship1,Ship2,Ship3};