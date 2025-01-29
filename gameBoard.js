class GameBoard{
    constructor(){
        this.board=[[0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]];
        this.missed=[];
    }
}
import {Ship1,Ship2,Ship3} from './ships.js'
class Player{
    constructor(){
        this.ships=3;
        this.ship1=new Ship1();
        this.ship2=new Ship2();
        this.ship3=new Ship3();
        this.gameBoard=new GameBoard();
    }
    attack(x,y){
        if(this.gameBoard.board[x][y]==0){
            console.log("Shot missed");
        }
        else if(this.gameBoard.board[x][y]==1){
            this.ship1.hit();
        }
        else if(this.gameBoard.board[x][y]==2){
            this.ship2.hit();
        }
        else if(this.gameBoard.board[x][y]==3){
            this.ship3.hit();
        }
    }

}