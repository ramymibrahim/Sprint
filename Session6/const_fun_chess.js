//Objects
//Properties
//Methods
//Events

//Inheritance
//Encapsulation
//Abstraction
//Polymorphism

//Class and Objects
// class Piece {
//   board;
//   x;
//   y;
//   type;
//   team;
//   constructor(board, x, y, type, team) {}
//   canMove() {
//     return !this.board.hasPiece(x, y, team);
//   }
//   move(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   kill(x, y) {
//     board.removePiece(x, y);
//     this.move(x, y);
//   }
// }

// let piece = {
//   board: null,
//   x: 1,
//   y: 2,
//   type: "pawn",
//   team: "white",
// };

// let piece = new Object({
//   board: null,
//   x: 1,
//   y: 2,
//   type: "pawn",
//   team: "white",
// });

// // let arr = [1, 2, 3, 4];
// let arr = new Array(1, 2, 3, 4);

// let funcTest = function () {};
// let set = new Set();
let Board = function () {
  this.lenght = 8;
  this.width = 8;
  this.pieces = [];
};

Board.prototype.startGame = function () {
  for (let i = 0; i < 16; i++) {
    this.pieces.push(new Piece(this, 1, 1, "pawn", "white"));
    this.pieces.push(new Piece(this, 1, 1, "pawn", "black"));
  }
};

Board.prototype.hasPiece = function (team, x, y) {
  return this.pieces.some((e) => e.team == team && e.x == x && e.y == y);
};

let Piece = function (board, x, y, type, team) {
  this.board = board;
  this.team = team;
  this.type = type;
  this._x = x;
  this._y = y;
};

let Pawn = function (board, x, y, team) {
  Piece.call(this, board, x, y, "pawn", team);
};

Piece.prototype.canMove = function (x, y) {
  if (x < 1 || y < 1 || x > this.board.lenght || y > this.board.width)
    return false;
  if (this.board.hasPiece(this.team, x, y)) return false;
  return true;
};

Piece.prototype.getCoordinates = function () {
  return `${this._x} ${this._y}`;
};

Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.canMove = function (x, y) {
  //if (!this.__proto__.__proto__.canMove.call(this)) return false;
  if (y <= this.y) return false;
  return true;
};

let board = new Board();
let pawn1 = new Pawn(board, 1, 2, "white");

